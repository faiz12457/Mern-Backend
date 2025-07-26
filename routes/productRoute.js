import express from 'express'
import { getProducts } from '../controllers/productsController/getProducts.js';
import { getSingleProduct } from '../controllers/productsController/getSingleProduct.js';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';
const router=express.Router()






router.get("/",verifyAccessToken,getProducts);
router.get("/details/:id",verifyAccessToken,getSingleProduct);



export default router;