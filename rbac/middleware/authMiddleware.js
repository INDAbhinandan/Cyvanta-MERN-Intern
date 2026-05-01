const jwt=require('jsonwebtoken')
const SECRETKEY="Abhi1517"

exports.protect=(req,res,next)=>{
    const token=req.headers.authorization;
    if (!token){
        return
        res.status(400).json({message:"No token provided"})
    }
try {
    const decoded=jwt.varify(token,SECRETKEY);
    req.user=decoded;
    next()
} catch (error) {
    res.status(400).json({message:"Invalid token"})
}

}