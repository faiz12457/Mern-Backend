import express from "express";
import { addCart } from "../controllers/cartControllers/addCart.js";
import { getCartItems } from "../controllers/cartControllers/getCartItems.js";
import { deleteCartItem } from "../controllers/cartControllers/deleteCartItem.js";
import { updateCartItem } from "../controllers/cartControllers/updateCartItem.js";
import { deleteAllCart } from "../controllers/cartControllers/deleteAllItems.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
const router = express.Router();

router.post("/add",verifyAccessToken,addCart);
router.get("/items/:token", verifyAccessToken,getCartItems);
router.delete("/delete/:id",verifyAccessToken ,deleteCartItem);
router.patch("/update",verifyAccessToken,updateCartItem);
router.delete("/deleteAll/:token",verifyAccessToken,deleteAllCart);

export default router;
