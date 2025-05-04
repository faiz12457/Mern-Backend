import { User } from "../../models/UserSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getUserController = async (req, res) => {
  const { token } = req.params;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.Access_TOKEN_KEY);
    } catch (error) {
      if (error.name !== "TokenExpiredError") {
        return res.status(401).json({ message: "Invalid access token" });
      }
    }

    if (decoded) {
      const user = await User.findById(decoded.id).select("-password -refreshToken");
      if (!user) return res.status(404).json({ message: "User not found" });
      return res.status(200).json({ user, token });
    }

    // Handle access token expired
    const { refreshToken } = req.cookies;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    try {
      const refreshDecoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
      const user = await User.findOne({ refreshToken }).select("-password -refreshToken");
      if (!user) return res.status(404).json({ message: "User not found" });

      const newAccessToken = user.generateAccessToken();
      return res.status(200).json({ user, token: newAccessToken });
    } catch (refreshErr) {
      return res.status(401).json({ message: "Refresh token expired or invalid" });
    }

  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};
