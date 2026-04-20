import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Listing", listingSchema);