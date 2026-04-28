const express=require('express')
const studentRoutes=require('./routes/studentRoutes.js')
const app=express()

// middleware
app.use(express.json())


// routes
app.use('/student',studentRoutes)


// server creating
const PORT=2000
app.get('/',(req,res)=>{
    res.send("Api is running")
})
app.listen(PORT,()=>{
    console.log(`Server is running at port:${PORT}`);
    
})