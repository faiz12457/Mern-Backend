
import { User } from "../../models/UserSchema.js";


import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const getUserController=async (req, res) => {
   
  const {token}=req.params;
  if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.Access_TOKEN_KEY); 
      const user = await User.findById(decoded.id).select("-password -refreshToken");
  
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.status(200).json(user);
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  }
