import jwt from "jsonwebtoken";
import { Order } from "../../models/orderSchema.js";

export const getUserOrder = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    
    const decoded = jwt.verify(token, process.env.Access_TOKEN_KEY);
    
    const order = await Order.find({ user: decoded.id }).populate([
      { path: "user", select: "username email" },
      { path: "items.product", select: "-sizes -colorsAvailable " },
    ]);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
