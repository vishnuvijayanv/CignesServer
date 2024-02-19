

const mongoose = require('mongoose')

//creating schema for student registration

const studentSchema = new mongoose.Schema({
    studentname:{
        type:String,
        required:true,
        min:[3,'student name must be atleast 3 Characters']
    },
    phone:{
        type:Number,
        required:true,
        min:[10,'Phone Number Must Contain 10 Numbers']
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if (!validator.isEmail(value)) {
                throw new Error('invalid Email')
                
            }
        }
    },
    gender:{
        type:String,
        required:true
    },
    Courses:[{
        type:String,
        required:true

    }
],
courseMethod:{
    type:String,
    required:true
},
profilePicture:{
    type:String,
    required:true
},
dob:{
    type:Date,
    required:true
},
idImages:[{
    type:String,
    required:true
}],
Country:{
    type:String,
    required:true
}


})

//creating model using model in mongoose

const studentDetails = mongoose.model("studentDetails",studentSchema)

module.exports = studentDetails