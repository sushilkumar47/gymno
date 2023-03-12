const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
// const bcrypt=require("bcryptjs")
// require("../DB/dbConnect")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        isRequired:true,
    },
    password:{
        type:String,
        isRequired:true,
    },
    cpassword:{
        type:String,
        isRequired:true,
    },
    email:{
        type:String,
        isRequired:true,
    },
    phone:{
        type:String,
        isRequired:true,
    },
    goal:{
        type:String,
        isRequired:true,
    },
    Date:{
        type:Date,
        Default:Date.now,
    },
    messages:[{
        name:{
            type:String,
            isRequired:true,
        },
        email:{
            type:String,
            isRequired:true,
        },
        phone:{
            type:String,
            isRequired:true,
        },
        message:{
            type:String,
            isRequired:true,
        }
    }],
    tokens:[
        {
            token:{
                type:String,
                isRequired:true,
            }
        }
    ]
}
)


// we are hashing password



// userSchema.pre('save',async(next)=>{
//     if(this.isModified('password')){
//         this.password= await bcrypt.hash(this.password,12)
//         this.cpassword= await bcrypt.hash(this.cpassword,12)
//         console.log(req.body.password)
//     }
//     next();
// })

//we are generating token
userSchema.methods.generateAuthToken= async function(){
    try{
        let token =jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token;
    }catch(err){
        console.log(err)
    }
} 

//stored the message
userSchema.methods.addMessage=async function(name,email,phone,message){
    try{
        this.messages=this.messages.concat({name,email,phone,message})
        await this.save()
        return this.messages;
    }catch(err){
        console.log(err)
    }    
}

const User=new mongoose.model('USER',userSchema)

module.exports= User;