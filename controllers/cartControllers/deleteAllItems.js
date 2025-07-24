
import jwt from "jsonwebtoken"
import { Cart } from "../../models/cartSchema.js";
export const deleteAllCart=async(req,res)=>{
  const { token } = req.params;
  
 
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);

     
   const result=await Cart.deleteMany({user:decoded.id});
   
   if (result.deletedCount === 0) {
    return res.status(407).json({ message: "No carts found for this user" });
  }

  res.status(200).json({
    message: "All carts deleted successfully",
    deletedCount: result.deletedCount,
  });
   

  } catch (err) {
    
    res.status(401).json({ message: "Invalid token", error: err.message });
  }
}