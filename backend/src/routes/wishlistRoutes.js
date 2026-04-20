const express = require("express");
import {
  getWishlist,
  addToWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

router.get("/:userId", getWishlist);
router.post("/add", addToWishlist);

export default router;