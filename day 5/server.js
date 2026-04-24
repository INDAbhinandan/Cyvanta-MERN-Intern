// creating server in node js
const express=require("express")
const path=require('path')

const app=express()
const port=4000

app.get('/',function(req,res){
    res.send('hello world')
})

app.get('/shop',function(req,res){
    res.send('Welcome to my shop')
})

app.get('/myhtml',function(req,res){
   res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port,()=>{
    console.log("server started");
})

