import express from 'express'
import { getProducts } from '../controllers/productsController/getProducts.js';
import { getSingleProduct } from '../controllers/productsController/getSingleProduct.js';
import { createProduct } from '../controllers/productsController/createProduct.js';
import { upload } from '../fileUpload/multer.js';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';
const router=express.Router()







router.get("/",verifyAccessToken,getProducts);
router.get("/details/:id",verifyAccessToken,getSingleProduct);
router.post("/create",upload.array('file', 10),createProduct);


export default router;