const express = require("express");
const router = express.Router();

const {
  signupUser,
  loginUser
} = require("../controllers/authController");

// Signup Route
router.post("/signup", signupUser);

// Login Route
router.post("/login", loginUser);

// Test message
router.get("/", (req, res) => {
  res.json({ message: "Auth route working" });
});

module.exports = router;