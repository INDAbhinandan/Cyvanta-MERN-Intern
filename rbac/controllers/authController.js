const User=require('../models/userModel.js')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const SECRETKEY="Abhi1517"

// REGISTER
exports.register=async(req,res)=>{
    const {name,email,password,role}=req.body;

    const userExists=await
    User.findOne({email});
    if (userExists){
        return
        res.status(400).json({message:"User already Exist"})
    }
  
    const hashedPassword=await bcrypt.hash(password,10)
 const user=new User({
    name,
    email,
    password:hashedPassword,
    role:role || "user"
 });

 await user.save()
  res.status(200).json({message:"User registered succesfully"})

}


// login

exports.login=async(req,res)=>{
    const {email,password}=req.body;

    const user=await
    User.findOne({email});
    if (!user){
        return
        res.status(400).json({message:"User not registered"})
    }
  
   const isMatch=await bcrypt.campare(password,user.password)
    if (!isMatch){
        return
        res.status(400).json({message:"Invalid email and password"})
    }

    const token=jwt.sign(
        {id:user._id, role:user.role},SECRETKEY,{expiresIn:'1h'}
    )
  res.json({message:"User login succesfully",token})

}

// admin only api
exports.adminOnly=async(req,res)=>{
res.json({
    message:"Welcome Admin ! this is only for admin"
})
}
