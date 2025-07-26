import { Product } from "../../models/productSchema.js";

export const getProducts = async (req, res) => {
  try {
    let limit = 0;
    let skip = 0;
    let sort = {};
    const { page, pagesize, order } = req.query;

    if (page && pagesize) {
      limit = pagesize;
      skip = pagesize * (page - 1);
    }

    if (req.query.sort) {
      if (order) {
        sort[req.query.sort] = order === "asc" ? 1 : -1;
      }
    }

    
    const totalDocs = await Product.find({isDeleted:false}).sort(sort).countDocuments();
    const products = await Product.find({isDeleted:false})
      .sort(sort)
      .skip(skip)
      .limit(limit)
      .populate("category")
      .populate("productBrand");

    if (products.length > 0) {
      return res.status(200).send({ data: products, totalResults: totalDocs });
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
};
