const express = require("express");
import {
  getCart,
  addToCart,
  saveForLater,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/:userId", getCart);
router.post("/add", addToCart);
router.post("/save", saveForLater);

export default router;