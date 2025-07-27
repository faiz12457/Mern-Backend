import { uploadOnCloudinary } from "../../fileUpload/cloudnary.js";
import { Brand } from "../../models/brandSchema.js";
import { Category } from "../../models/categorySchema.js";
import { Product } from "../../models/productSchema.js";

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const paths = req.files.map((file) => file.path);

    let urls = [];
    if (paths.length > 0) {
      const uploadResults = await Promise.all(
        paths.map((path) => uploadOnCloudinary(path))
      );
      urls = uploadResults.map((data) => data.url);
    }

    let brand = await Brand.findOne({ name: req.body.productBrand });
    let category = await Category.findOne({ name: req.body.category });
    if (!brand) {
      brand = await Brand.create({ name: req.body.productBrand });
    }
    if (!category) {
      category = await Category.create({ name: req.body.cateogry });
    }

    if (req.body.urls.length > 0) urls.unshift(req.body.urls);
    req.body["images"] = urls;
    delete req.body.urls;

    req.body["productBrand"] = brand._id;
    req.body["category"] = category._id;

    req.body["colorsAvailable"] = [...req.body.colorsAvailable.split(",")];
    req.body["sizes"] = [...req.body.sizes.split(",")];

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
    )
      .populate("productBrand")
      .populate("category");

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
