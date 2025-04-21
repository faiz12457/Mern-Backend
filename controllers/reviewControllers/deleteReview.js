import { Review } from "../../models/reviewSchema.js";


export const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    

    const deletedReview = await  Review.findOneAndDelete({user:id});

    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found or already deleted" });
    }

    res.status(200).json(deletedReview);
  } catch (error) {
    
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
