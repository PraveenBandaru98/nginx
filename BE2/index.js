const express = require("express")
const app=express()


app.get('/',(req,res)=>{
    res.send("Hello World from server 2")
})


app.listen(7777,()=>{
    console.log("Server 1 is running on port 7777")
})