const express = require('express')

//import controller

const studentController = require('../Controllers/studentController')

//import Middlewares

const multerMiddleware = require('../Middlewares/multerMiddleware')


//creating an object for Router class in express module
const router = new express.Router()

//path to student registration
router.post('/students/add',multerMiddleware.fields([{name:'profilePicture',maxCount:1},{name:'idImages',maxCount:2 }]),studentController.studentRegister)

//path to get student details

router.get('/student/view',studentController.getStudentDetails)
module.exports = router