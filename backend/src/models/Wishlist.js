import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", wishlistSchema);