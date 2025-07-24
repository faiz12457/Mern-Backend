import { Address } from "../../models/addressSchema.js";
import jwt from "jsonwebtoken";
export const addressUpdateController = async (req, res) => {
    const { token } = req.params;
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }


    try {

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
    
      const updatedAddress = await Address.findOneAndUpdate(
        { user:decoded.id },
        { $set: { ...req.body } }, 

      );

        
  
      if (!updatedAddress) {
        return res.status(404).json({ message: "Address not found" });
      }

      const up=await Address.findOne({user:decoded.id});
  
      res.status(200).json(up);
    } catch (err) {
      res.status(500).json({ message: "Error updating address", error: err.message });
    }
  };
  

