// middlewares/errorHandler.js
module.exports = (err, req, res, next) => {
  res.status(500).json({
    error: err.message || "Something went wrong!"
  });
};
