import mongoose, { Schema, model } from "mongoose";


const cartSchema= new Schema({

    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },

    quantity:{
        type:Number,
        default:1
    },

    size:{
        type:String,
        default:"One size"
    },

    color:{
        type:String,
        default:null,
    }


})



export const Cart=model("Cart",cartSchema);