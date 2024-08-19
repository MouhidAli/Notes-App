import mongoose from "mongoose";

const DbCon = async() =>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB IS CONNECTED") 
    } catch(error){
        console.log("Error in MongoBD", error)
    }
}

export default DbCon