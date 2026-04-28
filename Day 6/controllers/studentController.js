let students=require('../models/studentModel.js')


// get all student
exports.getAllStudents=(req,res)=>{
    res.json(students)
}

// test
const name="Abhinandan"
exports.testStudent=(req,res)=>{
    res.json(name)
}

// add a student
exports.addStudent=(req,res)=>{
    const {name,age}=req.body

    if(!name || !age){
        return
        res.status(400).json({message:"Name and age is required"})
    }

    const newStudent={
        id:students.length+1,
        name,
        age
    }
    students.push(newStudent);
    res.status(200).json({
        message:"student added",
        student:newStudent
    })


}