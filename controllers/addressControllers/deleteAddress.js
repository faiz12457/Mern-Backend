

import jwt from "jsonwebtoken";
import { Address } from "../../models/addressSchema.js";

export const deleteAddress = async (req, res) => {
  const { token } = req.params;

  try {
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.Access_TOKEN_KEY);

    const deletedAddress = await  Address.findOneAndDelete({user:decoded.id});

    if (!deletedAddress) {
      return res.status(404).json({ message: "Address not found or already deleted" });
    }

    res.status(200).json(deletedAddress);
  } catch (error) {
    
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
