

require('dotenv').config()

const express = require('express')

const cors = require('cors')

//import router 

const router = require('./Routers/router')

require('./DataBase/dbConnection')


//create server using express

const studentServer = express()

//to connect front end and backend use cors

studentServer.use(cors())

//to conver json to js - Returns middleware that only parses json

studentServer.use(express.json())

studentServer.use(router)

// use uploads file to store images 

studentServer.use('/uploads',express.static( './uploads'))

const SERVER_PORT = 4000 || process.env

studentServer.listen(SERVER_PORT,()=>{
    console.log(`Student Server Running At Port ${SERVER_PORT}`);
})