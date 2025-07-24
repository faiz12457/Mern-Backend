import express from "express"
import { registerReviewController } from "../controllers/reviewControllers/registerReview.js";
import { productReviewController } from "../controllers/reviewControllers/productReviewController.js";
import { deleteReview } from "../controllers/reviewControllers/deleteReview.js";
import { updateReview } from "../controllers/reviewControllers/updateReview.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
const router=express.Router();








router.post("/register",verifyAccessToken,registerReviewController);
router.get("/product/:id",verifyAccessToken,productReviewController);
router.delete("/delete/:id",verifyAccessToken,deleteReview);
router.patch("/update/:id",verifyAccessToken,updateReview);

export default router;


