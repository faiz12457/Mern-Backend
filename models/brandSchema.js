import { Schema, model } from "mongoose";

const brandSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        brand:true,
    }
})


export const Brand=model('brand',brandSchema);