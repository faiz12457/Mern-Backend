import { Review } from "../../models/reviewSchema.js";

export const productReviewController = async (req, res) => {
    const { id } = req.params;
  
    try {
      const reviews = await Review.find({ product: id })
        .populate("user", "username email _id") 
        .populate("product", "name");  

        
  
      return res.status(200).json({
        message: "Product reviews fetched successfully",
        reviews,
      });
  
    } catch (error) {
    
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  