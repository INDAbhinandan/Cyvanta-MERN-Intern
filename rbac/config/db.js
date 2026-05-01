const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/rbacDB')
    console.log("Database is connected");
    
    } catch (error) {
        console.error("DB Connection error",error)
        process.exit(1)
    }
}

module.exports=connectDB