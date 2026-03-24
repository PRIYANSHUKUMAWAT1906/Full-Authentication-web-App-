const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const router=express.Router();
const authMiddleware=require("../middleware/auth");

const User=require("../Models/User");

router.post('/signup', async(req,res)=>{
    try{
    const{name,email,password}=req.body;
   
     if(!name||!email||!password){
        return res.status(400).json({message:'All fields are required'});
       }
       const existingUser = await User.findOne({ email });
     if(existingUser){
        return res.status(400).json({message:'User already exists'});
       }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newuser=new User({
        name,
        email:email.toLowerCase(),
        password:hashedpassword
       })

    await newuser.save();
    res.status(201).json({message:"user successfully created"});

   }
 catch(error){
   return res.status(500).json({message:"internal server error"})
}}
)


router.post('/login',async(req,res)=>{
    try{
  const { email, password } = req.body;
   if(!email||!password){
     return res.status(400).json({message:"bad request missing information"});
   }
    const user= await User.findOne({email});
    if(!user){
    return res.status(401).json({message:"Invalid email or password"});
    }
      const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
    return res.status(401).json({message:"Invalid email or password"});
      }

   const token = jwt.sign(
     { userId: user._id },
     process.env.JWT_SECRET,
     { expiresIn: "1h" }
   );

 return res.status(200).json({
    message:"login successful",
    token: token,
 })
    }
    catch(error){
        return res.status(500).json({message:"internal server error"});
    }
})


router.get('/profile',authMiddleware,async (req,res)=>{ 
     const user = await User.findById(req.user.userId);
    res.json(user);

})
module.exports=router;