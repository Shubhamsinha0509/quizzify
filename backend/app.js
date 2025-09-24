import express from "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get('/',(req,res)=>{
    res.send("hello from node server")
})

const port = process.env.PORT || 8000

app.use(express.json())

connectDB()

app.listen(process.env.PORT || 8000,()=>{
    console.log(`server running on http://localhost:${port}`)
})