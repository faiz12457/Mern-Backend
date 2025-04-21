import express from "express";
import { addCart } from "../controllers/cartControllers/addCart.js";
import { getCartItems } from "../controllers/cartControllers/getCartItems.js";
import { deleteCartItem } from "../controllers/cartControllers/deleteCartItem.js";
import { updateCartItem } from "../controllers/cartControllers/updateCartItem.js";
import { deleteAllCart } from "../controllers/cartControllers/deleteAllItems.js";
const router = express.Router();

router.post("/add", addCart);
router.get("/items/:token", getCartItems);
router.delete("/delete/:id", deleteCartItem);
router.patch("/update", updateCartItem);
router.delete("/deleteAll/:token",deleteAllCart);

export default router;
