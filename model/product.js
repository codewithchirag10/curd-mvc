
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    discription:{
        type:String
    }
},{
    timeStamp:true
})

module.exports = mongoose.model("product",productSchema)