const express=require("express")
const dotenv=require("dotenv")
const app=express()
const port=5500

app.use((req,res,next)=>{
    if(10>19){
        next()
    }
    else{
        res.send("the conditon is dfalied here")
    }
})
app.get("/sample",(req,res)=>{
    res.send("this is the sample")
})

app.get("/sample1",(req,res)=>{
    res.send("this is the sample1")
})


app.get("/sample2",(req,res)=>{
    res.send("this is the sample2")
})

app.listen(port,()=>{
    console.log(`server is connetd to ${port}`)
})