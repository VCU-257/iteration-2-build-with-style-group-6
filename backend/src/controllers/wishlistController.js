import Wishlist from "../models/Wishlist.js";

export const getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ userId: req.params.userId });
  res.json(wishlist);
};

export const addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = await Wishlist.create({ userId, productIds: [] });
  }

  if (!wishlist.productIds.includes(productId)) {
    wishlist.productIds.push(productId);
  }

  await wishlist.save();

  res.json(wishlist);
};