import express from 'express'
import { getProducts } from '../controllers/productsController/getProducts.js';
import { getSingleProduct } from '../controllers/productsController/getSingleProduct.js';
import { createProduct } from '../controllers/productsController/createProduct.js';
const router=express.Router()







router.get("/",getProducts);
router.get("/details/:id",getSingleProduct);
router.post("/create",createProduct);


export default router;