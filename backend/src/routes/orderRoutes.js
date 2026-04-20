import express from "express";
import {
  checkout,
  requestReturn,
  cancelReturn,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/checkout", checkout);
router.post("/:orderId/return", requestReturn);
router.post("/:orderId/cancel-return", cancelReturn);

export default router;