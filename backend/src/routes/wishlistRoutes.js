const express = require("express");

const {
  getWishlist,
  addToWishlist,
} = require("../controllers/wishlistController");

const router = express.Router();

router.get("/:userId", getWishlist);
router.post("/add", addToWishlist);

module.exports = router;