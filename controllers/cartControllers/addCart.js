import { Cart } from "../../models/cartSchema.js";

export const addCart = async (req, res) => {
  try {
    const { userId, productId, quantity, size, color } = req.body;

    if (!userId || !productId || !quantity || !size || !color) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingCartItem = await Cart.findOne({
      user: userId,
      product: productId,
      size,
      color,
    });

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
      await existingCartItem.save();

      const updatedItem = await Cart.findById(existingCartItem._id).populate([
        { path: "user", select: "username email _id" },
        {
          path: "product",
          select: "name price productBrand category discountPercentage images inStock",
        },
      ]);
        
      return res.status(200).json({
        message: "Item quantity updated in cart",
        cartItem: updatedItem,
      });
    }

    const newCartItem = new Cart({
      user: userId,
      product: productId,
      quantity,
      size,
      color,
    });

    await newCartItem.save();

    const populatedCartItem = await Cart.findById(newCartItem._id).populate([
      { path: "user", select: "username email _id" },
      {
        path: "product",
        select: "name price productBrand category discountPercentage images inStock",
      },
    ]);
       
    return res.status(201).json({
      message:"added",
      cartItem: populatedCartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
