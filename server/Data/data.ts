import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if(uri){
    mongoose
    .connect(uri)
    .then(()=>{
        console.log('Db connection established');
    })
    .catch(()=> console.log("db connection failed"));
}