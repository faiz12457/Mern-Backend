import { Product } from "../../models/productSchema.js";

export const restoreProductController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "No Id Provided" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isDeleted = false;

    await product.save();
 
    res.status(200).json({ message: `Product restore successfully`, id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
