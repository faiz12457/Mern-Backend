import { Cart } from "../../models/cartSchema.js";

export const updateCartItem = async (req, res) => {
  try {
    const { id: _id, ...updateData } = req.body;

    if (!_id) {
      return res.status(400).json({ message: "No ID provided" });
    }
    
    const updatedItem =await Cart.findOneAndUpdate(
      { _id },
      { $set: { ...updateData } },
      { new: true }
    ).populate([
      { path: "user", select: "username email _id" },
      {
        path: "product",
        select: "name price productBrand category discountPercentage images inStock",
      },
    ]);
      
    if (!updatedItem) {
      return res.status(404).json({ message: "Review not found" });
    }
  
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({
      message: "Error updating review",
      error: error.message,
    });
  }
};
