const express= require("express");
const { connection } = require("./db");
const cors= require("cors");
const { userRouter } = require("./routes/user.route");
const app= express()
app.use(express.json());
app.use(cors())
app.use("/users",userRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to the Contact Scheduler")
})

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log('Connected to the DB')
    } catch (error) {
        console.log(error.message)
    }
})