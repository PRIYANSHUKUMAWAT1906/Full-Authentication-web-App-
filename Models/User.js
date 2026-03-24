const mongoose=require('mongoose');

const Userschema=new mongoose.Schema({
name:{
    type: String,
    required: true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowerCase:true,
    trim:true,
},
password:{
    type:String,
    required:true
}},
{
timestamps:true
})
const User=mongoose.model('User',Userschema);
module.exports=User;