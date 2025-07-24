import express from "express";
import { signUpController } from "../controllers/authControllers/signUpController.js";
import { loginController } from "../controllers/authControllers/loginController.js";
import { logoutController } from "../controllers/authControllers/logoutController.js";
import passport from "passport";
import { redirectController } from "../controllers/authControllers/redirectController.js";
import { refreshController } from "../controllers/authControllers/refreshController.js";
import { forgetPasswordController } from "../controllers/authControllers/forgotPassword.js";
import { verifyOtpController } from "../controllers/authControllers/verifyOpt.js";
import { resetPasswordController } from "../controllers/authControllers/resetPassword.js";
import { getOtpController } from "../controllers/authControllers/getOtp.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);
router.get('/google/redirect',passport.authenticate("google",{session:false}),redirectController);
router.post("/signup", signUpController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.post('/refresh',refreshController)
router.post("/forgotPassword",forgetPasswordController)
router.post("/verifyOtp",verifyOtpController)
router.post("/resetPassword",resetPasswordController);
router.post("/getOtp",getOtpController);
export default router;
