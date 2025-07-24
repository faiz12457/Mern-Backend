import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },

    items: [
        {
            product:{
               type: Schema.Types.ObjectId,
               ref:'Product',
            },

            quantity:{
                type:Number,
                required:true,
            },

            size:{
                type:String,
                required:true
            },

            color:{
                type:String,
                required:true
            }


        }
    ],

    address: {
        type: Schema.Types.Mixed,
        required: true,
    
    },

    total: {
        type: Number,
        required: true,
    },

    paymentMode: {
        type: String,
        enum: ['COD', 'CARD'],
        required: true
    },
    
    status: {
        type: String,
        enum: ['Pending', 'Dispatched', 'Out for delivery', 'Cancelled'],
        default: 'Pending',
    }

}, { timestamps: true });

export const Order = model('order', orderSchema);














