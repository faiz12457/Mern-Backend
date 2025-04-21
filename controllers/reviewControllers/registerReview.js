import { Review } from "../../models/reviewSchema.js";



export const registerReviewController = async (req, res) => {
    try {
        
     const { rating, userId, productId, reviewMsg } = req.body;

      if ( !userId || !productId || !reviewMsg || !rating) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }
  

      const review = new Review({
        user: userId,
        product: productId,
        rating,
        comment:reviewMsg,
      });
  
      const newReview = await review.save()

      const findReview=await Review.findById(newReview._id).populate([
         { path: "user", select: "username email _id" },
         { path: "product", select: "name" }
       ]);
      
  
      return res.status(201).json({
        message: "Review submitted successfully",
        review:findReview,
      });
  
    } catch (error) {
    
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
  