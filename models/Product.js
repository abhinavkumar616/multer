const mongoose=require("mongoose")

const ProductSchema=new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    img:{
        type: String,
        default:""
    }
})

module.exports=new mongoose.model("Product",ProductSchema)