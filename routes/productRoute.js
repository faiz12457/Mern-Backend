import express from 'express'
import { getProducts } from '../controllers/productsController/getProducts.js';
import { getSingleProduct } from '../controllers/productsController/getSingleProduct.js';
const router=express.Router()







router.get("/",getProducts);
router.get("/details/:id",getSingleProduct);


export default router;