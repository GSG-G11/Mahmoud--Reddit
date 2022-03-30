const { verifyToken } = require("../utils");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const {
      env: { SECRET_KEY },
    } = process;

    const {
      cookies: { token },
    } = req;

    if (token) {
      const value = await verifyToken(token, SECRET_KEY);
      req.user_id = value.userId;
      req.userId = value.userId;
      next();
    } else {
      res.status(401).json({ status: "error", message: "Unauthorized" });
    }
  } catch (err) {
    if (err.message.includes("invalid")) {
      res.status(401).json({ status: "error", message: "Unauthorized" });
    } else {
      next(err);
    }
  }
};
