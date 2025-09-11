// Entry point 

import express from "express"
const app = express()

const PORT = 5000

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})