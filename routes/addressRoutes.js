import express from "express"
import { registerController } from "../controllers/addressControllers/registerController.js";
import { addressUpdateController } from "../controllers/addressControllers/addressUpdateController.js";
import { getAddress } from "../controllers/addressControllers/getAddress.js";
import { deleteAddress } from "../controllers/addressControllers/deleteAddress.js";

const router=express.Router();




router.post("/register",registerController);
router.patch("/update/:token",addressUpdateController);
router.get("/:token",getAddress);
router.delete("/delete/:token",deleteAddress);














export default router;