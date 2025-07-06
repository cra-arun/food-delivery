// backend/controllers/adminController.js
const { db } = require("../firebase-admin");
const calculateProfit = require("../utils/calculateProfit");

exports.getAnalytics = async (req, res, next) => {
  try {
    const snapshot = await db.ref("orders").once("value");
    const orders = snapshot.val();

    const totalOrders = Object.keys(orders || {}).length;
    const totalRevenue = Object.values(orders || {}).reduce(
      (sum, order) => sum + order.items.reduce((s, i) => s + i.qty * i.price, 0),
      0
    );

    const profit = calculateProfit(totalRevenue);

    res.status(200).json({ totalOrders, totalRevenue, profit });
  } catch (err) {
    next(err);
  }
};
