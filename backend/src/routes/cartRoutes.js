const express = require("express");

const {
  getCart,
  addToCart,
  saveForLater,
} = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId", getCart);
router.post("/add", addToCart);
router.post("/save", saveForLater);

module.exports = router;