
const mongoose = require('mongoose')

//access connection string of mongodb from process.env

const connectionString = process.env.STUDENTS_DATABASE

//connect server with mongodb using connect()

mongoose.connect(connectionString).then(()=>{
    console.log('DataBase Connection Successful');
}).catch((err)=>{
    console.log(`Connection Failed Due To :${err}`);
})