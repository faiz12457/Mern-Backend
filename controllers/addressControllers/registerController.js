import { Address } from "../../models/addressSchema.js";
import jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { country, phoneNumber, city, street, postalCode, user, province,type } =
      req.body;

    if (
      !country ||
      !phoneNumber ||
      !city ||
      !street ||
      !postalCode ||
      !user ||
      !province||
      !type
    ) {
      return res.status(500).json({
        message: "All fields required",
      });
    }

     const decoded = jwt.verify(user, process.env.ACCESS_TOKEN_KEY);
     const currAdd=await Address.findOne({user:decoded.id});
     
     if(currAdd){
      return res.status(500).json({
        message:"Address exist"
      })
     }
    const newAddress = new Address({
      street,
      phoneNumber:Number(phoneNumber),
      city,
      country,
      postalCode:Number(postalCode),
      user:decoded.id,
      province,
      type
    });

    //newAddress.save({ validateBeforeSave: false }
    const savedAddress = await newAddress.save();

    res.status(201).json(savedAddress);
  } catch (err) { 
    

    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors,
      });
    }

    res.status(500).json({ message: "Server error" });
  }
};
