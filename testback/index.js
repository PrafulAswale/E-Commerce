const express = require("express");

const app = express();

const port = 8000;

app.get("/login", (req, res) => {
    return res.send("You are just login!!");
});

app.get("/signin", (req, res)=> {
    return res.send("SignIn Successfull!!");
});

app.get("/signout",(req,res)=>{
    return res.send("Signout Successful!!");
});

app.listen(port, () => {
    console.log("Server is up and running...");
});