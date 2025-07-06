// backend/firebase-admin.js
const admin = require("firebase-admin");

const serviceAccount = require("./firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://food-delivery-405c8-default-rtdb.firebaseio.com"
});

const db = admin.database();

module.exports = { admin, db };
