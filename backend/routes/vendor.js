// backend/routes/vendor.js
const express = require("express");
const router = express.Router();
const { getVendorOrders, updateOrderStatus } = require("../controllers/vendorController");

router.get("/orders/:vendorId", getVendorOrders); // /api/vendor/orders/:vendorId
router.post("/order-status/:orderId", updateOrderStatus); // update status

module.exports = router;
