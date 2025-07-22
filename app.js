const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")

const productRoute = require("./route/productroute")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/product",productRoute)


app.listen(5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected); 
    } catch (error) {
        console.log(error.message);
        
    }
}
db()