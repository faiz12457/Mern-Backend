import express from "express"
import { createOrder } from "../controllers/orderControllers/createrOrder.js";
import { getUserOrder } from "../controllers/orderControllers/getUserOrder.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";

const router=express.Router();


router.post("/create",verifyAccessToken,createOrder)
router.get("/myOrder/:token",verifyAccessToken,getUserOrder)




export default router;