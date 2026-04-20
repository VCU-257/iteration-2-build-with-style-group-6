import Cart from "../models/Cart.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart);
};

// ADD TO CART
export const addToCart = async (req, res) => {
  const { userId, productId, price } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({ userId, items: [] });
  }

  const existing = cart.items.find(
    (i) => i.productId.toString() === productId
  );

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.items.push({ productId, quantity: 1, price });
  }

  await cart.save();
  res.json(cart);
};

// SAVE FOR LATER
export const saveForLater = async (req, res) => {
  const { userId, productId } = req.body;

  const cart = await Cart.findOne({ userId });

  const itemIndex = cart.items.findIndex(
    (i) => i.productId.toString() === productId
  );

  if (itemIndex !== -1) {
    const item = cart.items.splice(itemIndex, 1)[0];
    cart.savedForLater.push(item);
  }

  await cart.save();
  res.json(cart);
};