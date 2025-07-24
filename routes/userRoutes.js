import express from "express";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";
import { getUserController } from "../controllers/userControllers/getUserController.js";


const router=express.Router();




router.get("/me/:token",verifyAccessToken,getUserController);





export default router