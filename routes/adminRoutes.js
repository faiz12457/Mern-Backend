import express from "express"
import { adminGetProductsController } from "../controllers/adminControllers/adminGetProductsController.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
import { upload } from "../fileUpload/multer.js";
import { createProduct } from "../controllers/adminControllers/createProduct.js";
import { deleteProductController } from "../controllers/adminControllers/deleteProduct.js";
import { restoreProductController } from "../controllers/adminControllers/restoreProduct.js";


const router=express.Router();


router.get("/products",verifyAccessToken,adminGetProductsController);
router.post("/create",upload.array('file', 10),verifyAccessToken,createProduct)
router.delete("/softDelete/:id",verifyAccessToken,deleteProductController)
router.post("/restore/:id",verifyAccessToken,restoreProductController);



















export default router;