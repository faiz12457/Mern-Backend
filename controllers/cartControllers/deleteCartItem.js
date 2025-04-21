import { Cart } from "../../models/cartSchema.js";

export const deleteCartItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Cart item ID is required",
      });
    }

    const deletedCartItem = await Cart.findByIdAndDelete(id);

    if (!deletedCartItem) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    return res.status(200).json({
      message: "Cart item deleted successfully",
      deletedCartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};





