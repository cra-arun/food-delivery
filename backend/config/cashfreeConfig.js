// config/cashfreeConfig.js
module.exports = {
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET_KEY,
  env: process.env.CASHFREE_ENV || "PROD", // fallback to PROD if not set
  apiBase: process.env.CASHFREE_API_BASE || "https://api.cashfree.com/pg"
};