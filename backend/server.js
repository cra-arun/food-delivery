// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Route imports
const paymentRoutes = require("./routes/payment");
const userRoutes = require("./routes/user");
const vendorRoutes = require("./routes/vendor");
const adminRoutes = require("./routes/admin");

// Middleware imports
const errorHandler = require("./middlewares/errorHandler");

// Apply middlewares
app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// API routes
app.use("/api/payment", paymentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/admin", adminRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
