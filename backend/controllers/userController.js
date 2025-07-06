// backend/controllers/userController.js
const { db } = require("../firebase-admin");

exports.getUserOrders = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const ordersRef = db.ref("orders");
    const snapshot = await ordersRef.once("value");

    const allOrders = snapshot.val();
    const userOrders = [];

    for (const orderId in allOrders) {
      const order = allOrders[orderId];
      if (order.userId === userId) {
        userOrders.push({ id: orderId, ...order });
      }
    }

    res.status(200).json(userOrders);
  } catch (err) {
    next(err);
  }
};
