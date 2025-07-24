import { Cart } from "../../models/cartSchema.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

export const getCartItems = async (req, res) => {
  try {
    const { token } = req.params;

    if (!token) {
      return res.status(400).json({
        message: "Token is required",
      });
    }


         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);


    const items = await Cart.find({ user: decoded.id }).populate([
      { path: "user", select: "username email _id" },
      {
        path: "product",
        select: "name price productBrand category discountPercentage images inStock",
      },
    ]);

    // if (!items.length) {
    //   return res.status(404).json({ message: "No cart items found" });
    // }

    res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
