
const studentDetails = require('../Model/studentSchema')

exports.studentRegister=async(req,res)=>{

    const {studentname,phone,email,gender,Courses,courseMethod,profilePicture,dob,idImages,Country} = req.body

    console.log(req.files);
   

    const idImageFilenames = req.files.idImages.map(file => file.filename);
    
    try{

        const studentExists = await studentDetails.findOne({email,phone})
        if (studentExists) {
            res.status(406).json('Student Already Registered')
            
        }
        else{
            const newStudent = new studentDetails({
                studentname,
                phone,
                email,
                gender,
                Courses,
                courseMethod,
                profilePicture:req.files.profilePicture[0].filename,
                dob:dob,
                idImages:idImageFilenames ,
                Country
            })

            // add new Student to mongodb using save()

            await newStudent.save()
            res.status(200).json(newStudent)
        }

    }catch(error){
        res.status(401).json(`Student Registration Failed Due To ${error}`)
    }

}



exports.getStudentDetails = async (req,res)=>{
    try{
        const allStudentDetails = await studentDetails.find()
        res.status(200).json(allStudentDetails)



    }
    catch(error){
        res.status(401).json(`Request Failed Due To ${error}`)
    }
}