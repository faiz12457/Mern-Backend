import { Review } from "../../models/reviewSchema.js";

export const updateReview = async (req, res) => {
  const { id: _id } = req.params;
  
const {id,...updateData}=req.body;

  if (!_id) {
    return res.status(400).json({ message: "No ID provided" });
  }

  try {
    const updatedReview = await Review.findOneAndUpdate(
      { _id },
      { $set: { ...updateData } },
      { new: true } 
    ).populate([
      { path: "user", select: "username email _id" },
      { path: "product", select: "name" },
    ]);

    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }


    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(500).json({
      message: "Error updating review",
      error: err.message,
    });
  }
};
