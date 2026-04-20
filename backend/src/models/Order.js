import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
        quantity: Number,
        price: Number,
      },
    ],

    status: {
      type: String,
      default: "placed", // placed | return_requested
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);