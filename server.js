const express= require('express');
require("dotenv").config();
const connectDB = require('./config/db.js');
const authrouter=require('./routes/auth.js');
const app=express();

app.use(express.json());
app.use('/api',authrouter);
app.use(express.static("public"));

connectDB();
console.log("ENV CHECK:", process.env.MONGO_URI);
app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000/signup.html");
})