// utils/cashfree.js
const axios = require("axios");
const { appId, secretKey, env, apiBase } = require("../config/cashfreeConfig");

async function generatePaymentSession(amount, orderId) {
  const headers = {
    "x-api-version": "2022-09-01",
    "x-client-id": appId,
    "x-client-secret": secretKey,
    "Content-Type": "application/json"
  };

  const body = {
    order_id: orderId,
    order_amount: amount,
    order_currency: "INR"
  };

  const { data } = await axios.post(`${apiBase}/orders`, body, { headers });
  return data.payment_session_id;
}

module.exports = { generatePaymentSession };
