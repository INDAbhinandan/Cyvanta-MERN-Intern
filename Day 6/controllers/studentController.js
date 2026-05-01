let students=require('../models/studentModel.js')


// get all student
exports.getAllStudents=async (req,res)=>{
    const student=await students.find()
    res.json(student)
}

// test
const name="Abhinandan"
exports.testStudent=(req,res)=>{
    res.json(name)
}

// add a student
exports.addStudent=async (req,res)=>{
    const {name,age}=req.body

    if(!name || !age){
        return
        res.status(400).json({message:"Name and age is required"})
    }

   const student=new students({name,age})
   await student.save()
    res.status(201).json({
        message:"student added",
        student
    })
}

// delete a student
exports.deleteStudent=async(req,res)=>{
    try {
        const student=await students.findByIdAndDelete(req.params.id)
       if(!student){
        res.status(404).json({message:"Student is not found"})
       }
       res.json({message:"Student Deleted"})
    } catch (error) {
        res.status(400).json({
            message:"Invalid id"
        })
    }
}