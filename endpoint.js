var express = require("express")
var app= new express()
app.get("/",function(req,res){
    res.write("first get request")
    res.end()
})
app.get("/students",function(req,res){
    res.write("first student")
    res.end()
})
app.get("/students/:id",(req,res)=>{
    res.write("student record of "+req.params.id+"fetched")
})
app.post("/insert",(req,res)=>{
    res.send("student record posted")
}
)
app.listen(3000,()=>{
    console.log("Server Started")
    })
    