import { Order } from "../../models/orderSchema.js";

export const createOrder = async (req, res) => {
  try {
    const { address, items, total, paymentMode, user } = req.body;

  
    if (!address || !items?.length || !total || !paymentMode || !user) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
  
    const order = new Order({
      user,
      items,
      total,
      paymentMode,
      address,
    });
  
  
    const newOrder= await order.save();

    res.status(201).json({ orderId:newOrder._id });

  } catch (error) {
    
    return res.status(500).json({
        
        message: "Internal Server Error",
        error: error.message,
      });
  }
};
