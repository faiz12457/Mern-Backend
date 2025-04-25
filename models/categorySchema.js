import { Schema, model } from "mongoose";

const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        brand:true,
    }
})


export const Category=model('category',categorySchema);