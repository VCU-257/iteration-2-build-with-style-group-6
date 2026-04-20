import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },

    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
        quantity: { type: Number, default: 1 },
        price: Number,
      },
    ],

    savedForLater: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);