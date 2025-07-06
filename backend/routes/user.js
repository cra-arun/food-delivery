// backend/routes/user.js
const express = require("express");
const router = express.Router();
const { getUserOrders } = require("../controllers/userController");

router.get("/orders/:userId", getUserOrders); // e.g., /api/user/orders/:userId

module.exports = router;
