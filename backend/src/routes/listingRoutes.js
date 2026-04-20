const express = require("express");
const {
  getListings,
  createListing,
} = require("../controllers/listingController");

const router = express.Router();

router.get("/", getListings);
router.post("/", createListing);

module.exports = router;