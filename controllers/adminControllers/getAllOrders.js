import { Order } from "../../models/orderSchema.js";

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await Order.find({}).populate([
      { path: "user", select: "username email" },
      { path: "items.product", select: "-sizes -colorsAvailable " },
    ]);

    if (!orders) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res.status(200).json({ orders });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
