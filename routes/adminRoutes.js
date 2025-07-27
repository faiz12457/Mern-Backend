import express from "express"
import { adminGetProductsController } from "../controllers/adminControllers/adminGetProductsController.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
import { upload } from "../fileUpload/multer.js";
import { createProduct } from "../controllers/adminControllers/createProduct.js";
import { deleteProductController } from "../controllers/adminControllers/deleteProduct.js";
import { restoreProductController } from "../controllers/adminControllers/restoreProduct.js";
import { getAllOrdersController } from "../controllers/adminControllers/getAllOrders.js";
import { updateOrderStatus } from "../controllers/adminControllers/updateOrderStatus.js";
import { updateProductController } from "../controllers/adminControllers/updateProduct.js";


const router=express.Router();


router.get("/products",verifyAccessToken,adminGetProductsController);
router.post("/create",upload.array('file', 10),verifyAccessToken,createProduct)
router.delete("/softDelete/:id",verifyAccessToken,deleteProductController)
router.post("/restore/:id",verifyAccessToken,restoreProductController);
router.get("/orders",verifyAccessToken,getAllOrdersController);
router.post("/updateOrderStatus/:id",verifyAccessToken,updateOrderStatus);
router.post("/updateProduct/:id",upload.array('file', 10),verifyAccessToken,updateProductController);




export default router;