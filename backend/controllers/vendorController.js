// backend/controllers/vendorController.js
const { db } = require("../firebase-admin");

exports.getVendorOrders = async (req, res, next) => {
  try {
    const { vendorId } = req.params;
    const ordersRef = db.ref("orders");
    const snapshot = await ordersRef.once("value");

    const allOrders = snapshot.val();
    const vendorOrders = [];

    for (const orderId in allOrders) {
      const order = allOrders[orderId];
      if (order.vendorId === vendorId) {
        vendorOrders.push({ id: orderId, ...order });
      }
    }

    res.status(200).json(vendorOrders);
  } catch (err) {
    next(err);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    await db.ref(`orders/${orderId}/status`).set(status);
    res.status(200).json({ message: "Status updated" });
  } catch (err) {
    next(err);
  }
};
