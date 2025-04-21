
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import { User } from '../../models/UserSchema.js';
dotenv.config();


export const refershTokenController =  async (req, res) => {
    const token = req.cookies.refreshToken;
  
    if (!token) {
      return res.status(401).json({ message: 'Refresh token missing' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_KEY);
      const user = await User.findById(decoded.id);
  
      if (!user || user.refreshToken !== token) {
        return res.status(403).json({ message: 'Invalid refresh token' });
      }
  
      const newAccessToken = user.generateAccessToken();
      const newRefreshToken = user.generateRefreshToken();
  
      user.refreshToken = newRefreshToken;
      await user.save();
  
      res
        .cookie('refreshToken', newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'Strict',
          maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        .json({ accessToken: newAccessToken });
  
    } catch (err) {
      return res.status(403).json({ message: 'Token expired or invalid' });
    }
  }