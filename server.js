const express= require('express');
require("dotenv").config();
const connectDB = require('./config/db.js');
const authrouter=require('./routes/auth.js');
const app=express();

app.use(express.json());
app.use('/api',authrouter);
app.use(express.static("Public"));

connectDB();
console.log("ENV CHECK:", process.env.MONGO_URI);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Public/Signup.html");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
