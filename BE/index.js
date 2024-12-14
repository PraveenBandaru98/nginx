const express = require("express")
const app=express()


app.get('/',(req,res)=>{
    res.send("Hello World from server 1")
})

app.listen(6666,()=>{
    console.log("Server 1 is running on port 6666")
})