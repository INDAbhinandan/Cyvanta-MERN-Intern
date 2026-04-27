let students=require('../models/studentModel.js')

exports.getAllStudents=(req,res)=>{
    res.json(students)
}
const name="Abhinandan"
exports.testStudent=(req,res)=>{
    res.json(name)
}