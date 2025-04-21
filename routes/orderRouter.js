import express from "express"
import { createOrder } from "../controllers/orderControllers/createrOrder.js";
import { getUserOrder } from "../controllers/orderControllers/getUserOrder.js";

const router=express.Router();


router.post("/create",createOrder)
router.get("/myOrder/:token",getUserOrder)




export default router;