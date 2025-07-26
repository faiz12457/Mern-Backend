import { Product } from "../../models/productSchema.js";

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "No Id Provided" });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.isDeleted =true;
    

    await product.save();


    res.status(200).json({ message: `Product deleted successfully`, id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
