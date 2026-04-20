const Order = require("../models/order");
const Cart = require("../models/cart");

const checkout = async (req, res) => {
  const { userId } = req.body;

  const cart = await Cart.findOne({ userId });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const order = await Order.create({
    userId,
    items: cart.items,
    status: "placed",
  });

  cart.items = [];
  await cart.save();

  res.json(order);
};

const requestReturn = async (req, res) => {
  const order = await Order.findById(req.params.orderId);

  order.status = "return_requested";
  await order.save();

  res.json(order);
};

const cancelReturn = async (req, res) => {
  const order = await Order.findById(req.params.orderId);

  order.status = "placed";
  await order.save();

  res.json(order);
};

module.exports = {
  checkout,
  requestReturn,
  cancelReturn,
};