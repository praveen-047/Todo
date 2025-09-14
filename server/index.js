const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const TodoModel = require("./Models/Todo")
require("dotenv").config()


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDb connected")
})
.catch((e)=>{
    console.log(`mongoDB error : $(e)`)
})




app.post('/add', async (req,res)=>{
    try{
    const task = req.body.task
    const result = await TodoModel.create({
        task:task
    })
    res.status(200).json(result)
    }catch(e){
        res.status(500).json({error: e.message})
    }
})





app.listen(3000,()=>{
    console.log("server running")
})