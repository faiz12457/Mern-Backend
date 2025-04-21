import { Address } from "../../models/addressSchema.js";
import jwt from "jsonwebtoken";
export const getAddress = async (req, res) => {
  const { token } = req.params;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.Access_TOKEN_KEY);
    const address = await Address.findOne({user:decoded.id}).select("-user");
    if (!address) return res.status(404).json({ message: "Address not found" });

    res.status(200).json(address);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
