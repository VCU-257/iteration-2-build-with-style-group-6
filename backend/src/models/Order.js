const mongoose = require("mongoose");

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
      default: "placed",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);