// backend/routes/admin.js
const express = require("express");
const router = express.Router();
const { getAnalytics } = require("../controllers/adminController");

router.get("/analytics", getAnalytics); // /api/admin/analytics

module.exports = router;
