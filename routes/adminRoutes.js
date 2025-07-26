import express from "express"
import { adminGetProductsController } from "../controllers/adminControllers/adminGetProductsController.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
import { upload } from "../fileUpload/multer.js";
import { createProduct } from "../controllers/adminControllers/createProduct.js";


const router=express.Router();


router.get("/products",verifyAccessToken,adminGetProductsController);
router.post("/create",upload.array('file', 10),verifyAccessToken,createProduct)




















export default router;