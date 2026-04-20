const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");


dotenv.config();
console.log('Mongo URI:', process.env.MONGO_URI); // Add this line to see if it's loading correctly
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running...");
});

const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

const listingRoutes = require("./src/routes/listingRoutes");
app.use("/api/listings", listingRoutes);

const cartRoutes = require("./src/routes/cartRoutes");
app.use("/api/cart", cartRoutes);

const orderRoutes = require("./src/routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const wishlistRoutes = require("./src/routes/wishlistRoutes");
app.use("/api/wishlist", wishlistRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));