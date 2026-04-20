const express = require("express");

const {
  checkout,
  requestReturn,
  cancelReturn,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/checkout", checkout);
router.post("/:orderId/return", requestReturn);
router.post("/:orderId/cancel-return", cancelReturn);

module.exports = router;