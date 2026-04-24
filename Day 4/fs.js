const fs=require('fs')
// 1. Create a file
// fs.writeFile('demo.txt','Hello, this is my first file ',(err)=>{
//     if(err) throw err;
//     console.log("File is created");   
// })

//2. read file
// fs.readFile('demo.txt',utf-8,(err,data)=>{
//     if(err) throw err;
//     console.log(data);   
// })

// 3. delete a file  
fs.unlink('demo.txt',(err)=>{
 if(err) throw err;
 console.log("file is deleted");
 
})