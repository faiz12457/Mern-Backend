import { Schema, model } from "mongoose";

const addressSchema = new Schema({
  type:{
     type:String,
     required:true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:"User",
    required: true,
  },

  street: {
    type: String,
    requried: true,
  },

  province: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },

  postalCode: {
    type: Number,
    required: true,
  },

  phoneNumber: {
    type: Number,
    required: true,
  },
});


export const Address=model("Address",addressSchema);