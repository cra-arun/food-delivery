// controllers/paymentController.js
const { generatePaymentSession } = require("../utils/cashfree");

exports.createPaymentSession = async (req, res, next) => {
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const orderId = "ORD_" + Date.now();

    const paymentSessionId = await generatePaymentSession(amount, orderId);

    res.status(200).json({ paymentSessionId });
  } catch (err) {
    console.error("Payment error:", err);
    next(err);
  }
};
