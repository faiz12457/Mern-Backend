import mongoose, { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  productBrand: {
    type: String,
  },

  sizes: [
    {
      type: String,
    },
  ],

  inStock: {
    type: Boolean,
  },

  stockQuantity: {
    type: Number,
  },

  colorsAvailable: [
    {
      type: String,
    },
  ],

  isDeleted: {
    type: Boolean,
    default: false,
  },
},{timestamps:true});

export const Product = model("Product", productSchema);
