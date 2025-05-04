import express from 'express'
import { getProducts } from '../controllers/productsController/getProducts.js';
import { getSingleProduct } from '../controllers/productsController/getSingleProduct.js';
import { createProduct } from '../controllers/productsController/createProduct.js';
import { upload } from '../fileUpload/multer.js';
const router=express.Router()







router.get("/",getProducts);
router.get("/details/:id",getSingleProduct);
router.post("/create",upload.array('file', 10),createProduct);


export default router;