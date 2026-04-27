const express=require('express')
const router=express.Router()

const studentController=require('../controllers/studentController.js')

router.get('/',studentController.getAllStudents)
router.get('/test',studentController.testStudent)

module.exports=router

//http://localhost:2000/students   get
//http://localhost:2000/students/test  get