import mongoose, { Schema } from "mongoose";

//creating contactSchema 
const contactSchema=new Schema({
    name:String,                   // document : type
    email:String,
    message:String
});

export const Contact=mongoose.model('contact',contactSchema);