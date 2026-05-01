const mongoose=require('mongoose')
const studentSchema=new 
mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
type:Number,
require:true
    }
})

module.exports=mongoose.model('Student',studentSchema)