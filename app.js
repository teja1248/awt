var express = require("express")
var app= new express()
app.get("/",function(req,res){
    res.write("first get request")
    res.end()
})
app.post("/",(req,res)=>{
    res.write("first post request")
    res.end()
})
app.put("/",(req,res)=>{
    res.write("first put request")
    res.end()
})
app.post("/",(req,res)=>{
    res.write("first post request")
    res.end()
})
app.listen(3000,()=>{
console.log("Server Started")
})
