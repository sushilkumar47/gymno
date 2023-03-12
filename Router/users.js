const jwt=require("jsonwebtoken")
const express=require("express")
require('../DB/dbConnect')
const authenticate= require("../../server/middleware/authenticate")
const User=require('../Model/user')
const userRoute=express.Router()
const bcrypt=require("bcryptjs")



userRoute.get("/", async (req,res)=>{
    res.send("this is home page")
})
userRoute.get("/register", async (req,res)=>{
    res.send("this is register page")
})
userRoute.post("/register",async(req,res)=>{
    const {name,password,cpassword,email,phone,goal}=req.body

    if(!name || !email || !password || !cpassword || !phone || !goal){
        return res.status(422).json({error:"plz filled the field properly"})
    }
    try{
        const userExit=await User.findOne({email:email})
        if(userExit){
            return res.status(422).json({error:"email aleready exits"})
        }else if(password != cpassword){
            return res.status(422).json({error:"password are not matching"})
        }else{
            const salt=await bcrypt.genSalt(10)
            const hashPass=await bcrypt.hash(req.body.password,salt)
            const hashcPass=await bcrypt.hash(req.body.cpassword,salt)
          const newUser=new User({
            name,
            password:hashPass,
            cpassword:hashcPass,
            email,
            phone,
            goal,
        })
        
        await newUser.save();        
        res.status(201).json({message:`user register successfully`})
          }
    }catch(err){
        res.json(err)
    }
})
userRoute.get("/login", async (req,res)=>{
    res.send("this is login page")
})
userRoute.post("/login", async (req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"plz filled the data"})
        }
        const userLogin=await User.findOne({email:email})
        
        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password)
            
            const token=await userLogin.generateAuthToken()
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })
            if(!isMatch){
                res.status(400).json({error:"Invalid credential"})
            }else{
                res.json("user login successfully")           
            }
        }else{
            res.status(400).json({error:"Invalid credential"})
        }

        }catch(err){
        console.log(err)
    }
})
userRoute.get("/profile", authenticate ,(req,res)=>{
    res.send(req.rootUser)
})
userRoute.get("/getUserData", authenticate ,(req,res)=>{
    res.send(req.rootUser)
})
userRoute.get("/logout" ,(req,res)=>{
    res.clearCookie('jwtoken',{path:"/"})
    res.status(200).send("user Logout")
})
userRoute.get("/contact",(req,res)=>{
    res.send("contact page")
})
userRoute.post("/contact",authenticate,async(req,res)=>{
   try{
    const {name,email,phone,message}=req.body;
    if(!name || !email || !phone || !message){
        console.log("error in contact form")
        return res.json({error:"plz filled contact form correctly"})
    }
    const userContact=await User.findOne({_id:req.userID})
    if(userContact){
        const userMessage =await userContact.addMessage(name,email,phone,message);
        await userContact.save()
        res.status(201).json({message:"we get message"})
    }
   }catch(err){
    console.log(err)
   }
})

module.exports=userRoute;
