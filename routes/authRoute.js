import express from "express";
const router = express.Router();
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();
import { signUpController } from "../controllers/authControllers/signupController.js";
import { loginController } from "../controllers/authControllers/loginController.js";
import { logoutController } from "../controllers/authControllers/logoutController.js";
import { refershTokenController } from "../controllers/authControllers/refershTokenController.js";
import { getUserController } from "../controllers/authControllers/getUserController.js";
import { redirectController } from "../controllers/authControllers/googleController.js";


router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get("/google/redirect",passport.authenticate("google", { session: false }),redirectController);
router.post("/signup", signUpController);
router.get("/me/:token", getUserController);
router.post("/login", loginController);
router.post("/refresh-token", refershTokenController);
router.post("/logout", logoutController);

export default router;
