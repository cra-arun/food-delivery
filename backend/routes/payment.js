// routes/payment.js
const express = require("express");
const router = express.Router();
const { createPaymentSession } = require("../controllers/paymentController");

router.post("/create-payment", createPaymentSession);

module.exports = router;
