const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const TodoModel = require("./Models/Todo")
require("dotenv").config()


const app = express()
app.use(cors())
app.use(express.json())


const connectDb =  async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected")
    } catch (error) {
        console.log(`MongoDb error : ${error}`)
    }
}

connectDb();




app.post('/add', async (req,res)=>{
    try{
    const task = req.body.task
    const result = await TodoModel.create({
        task:task
    })
    res.status(201).json({result})
    }catch(e){
        res.status(500).json({error: e.message})
    }
})

app.get('/get',async (req,res)=>{
    try {
        const result = await TodoModel.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

app.put('/update/:id',async(req,res)=>{
    const {id} = req.params
    console.log(id)
    const response = await TodoModel.findByIdAndUpdate({_id:id},{done:true})
    res.status(200).json({response})
})

app.listen(3000,()=>{
    console.log("server running")
})