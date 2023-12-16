import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema({
        slot:String,
        name:String,
        phone:String,
        carnumber:String
});


export const Customer = mongoose.model("customer",customerSchema);