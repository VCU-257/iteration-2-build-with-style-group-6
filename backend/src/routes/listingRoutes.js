const express = require("express");
const {
  getListings,
  createListing,
  getListingById, // 👈 ADD THIS
} = require("../controllers/listingController");

const router = express.Router();

router.get("/", getListings);
router.post("/", createListing);
router.get("/:id", getListingById);

module.exports = router;