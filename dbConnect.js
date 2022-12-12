const mongoose=require("mongoose")

async function getData(){
    try{
        await mongoose.connect("mongodb://localhost:27017/product")
        console.log("DataBase is Connected");
    }catch(error){
        console.log("something went wrong in Database");
    }
}
getData()