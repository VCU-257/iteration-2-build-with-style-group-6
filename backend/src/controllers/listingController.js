const Listing = require("../models/listing");

const createListing = async (req, res) => {
  const listing = await Listing.create(req.body);
  res.json(listing);
};

const getListings = async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
};

module.exports = {
  createListing,
  getListings,
};