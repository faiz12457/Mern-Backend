import express from "express"
import { registerReviewController } from "../controllers/reviewControllers/registerReview.js";
import { productReviewController } from "../controllers/reviewControllers/productReviewController.js";
import { deleteReview } from "../controllers/reviewControllers/deleteReview.js";
import { updateReview } from "../controllers/reviewControllers/updateReview.js";
const router=express.Router();








router.post("/register",registerReviewController);
router.get("/product/:id",productReviewController);
router.delete("/delete/:id",deleteReview);
router.patch("/update/:id",updateReview);

export default router;


