import { Product } from "../../models/productSchema.js";

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(403).json({ message: "Id not provided" });
    }

    const forbiddenFields = ["_id", "createdAt", "updatedAt"];
    for (let field of forbiddenFields) {
      if (field in req.body) {
        return res
          .status(400)
          .json({ message: `Cannot update restricted field: ${field}` });
      }
    }

    
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Product updated", updatedProduct });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
