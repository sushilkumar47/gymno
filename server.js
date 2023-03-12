const dotenv=require("dotenv")
const express=require("express")
const cookieParser = require('cookie-parser');
const app=express()
dotenv.config({path:'./config.env'})
require("./DB/dbConnect")
app.use(express.json())
app.use(cookieParser())
app.use(require("./Router/users"))



//listen event to start server on port 7000
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)})