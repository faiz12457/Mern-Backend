import express from "express"
import { registerController } from "../controllers/addressControllers/registerController.js";
import { addressUpdateController } from "../controllers/addressControllers/addressUpdateController.js";
import { getAddress } from "../controllers/addressControllers/getAddress.js";
import { deleteAddress } from "../controllers/addressControllers/deleteAddress.js";
import { verifyAccessToken } from "../middlewares/verifyAccessToken.js";

const router=express.Router();




router.post("/register",verifyAccessToken,registerController);
router.patch("/update/:token",verifyAccessToken,addressUpdateController);
router.get("/:token",verifyAccessToken,getAddress);
router.delete("/delete/:token",verifyAccessToken,deleteAddress);

export default router;