import { Order } from "../../models/orderSchema.js";

export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;

    if (!id) {
      return res.status(400).json({ message: "No order ID provided" });
    }

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: "Order status updated", status,id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
