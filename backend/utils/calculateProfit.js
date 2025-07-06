// backend/utils/calculateProfit.js
module.exports = function calculateProfit(totalRevenue) {
  const platformCut = 0.1; // 10% cut
  return totalRevenue * platformCut;
};
