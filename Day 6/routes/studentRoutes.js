const express=require('express')
const router=express.Router()

const studentController=require('../controllers/studentController.js')

router.get('/',studentController.getAllStudents)
router.get('/test',studentController.testStudent)
router.post('/addStd',studentController.addStudent)
router.delete('/:id',studentController.deleteStudent)

module.exports=router

//http://localhost:2000/student   get
//http://localhost:2000/student/test  get
//http://localhost:2000/student/addStd  post
//http://localhost:2000/student/:id delete