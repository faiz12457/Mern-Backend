import jwt from "jsonwebtoken";

import dotenv from "dotenv";
import { User } from "../../models/UserSchema.js";
import { cookieOptions } from "../../utils/cookieOptions.js";
dotenv.config();

export const refreshController = async (req, res) => {
  const token = req.cookies.refreshToken||req.cookies.token;
  if (!token)
    return res.status(401).json({ message: "No refresh token provided" });
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_KEY);

    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    res.cookies("refreshToken", refreshToken, cookieOptions);
    res.status(200).json({ accessToken });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Invalid or expired refresh token" });
  }
};
