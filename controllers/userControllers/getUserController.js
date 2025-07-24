import jwt from "jsonwebtoken";
import { User } from "../../models/UserSchema.js";


export const getUserController = async (req, res) => {
  try {
   // const { token } = req.params;
   
    // if (!token) {
    //   return res.status(401).json({ message: "No token provided" });
    // }
    

    // const decoded = jwt.verify(token, process.env.Access_TOKEN_KEY);

    // const user = await User.findById(decoded.id).select(
    //   "-password -refreshToken"
    // );

    // if (!user) return res.status(400).json({ message: "User not found" });

    return res.status(200).json({ user:req.user });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};
