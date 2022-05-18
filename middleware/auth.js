const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) {
      throw new Error("No token provided");
    }

    const { userId } = jwt.decode(token, process.env.TOKEN_KEY);

    req.body.userId = userId;

    return next();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const optionallyVerifyToken = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) next();

    const decoded = jwt.decode(token, process.env.TOKEN_KEY);
    req.body.userId = decoded.userId;

    next();
  } catch (err) {
    next();
  }
};

module.exports = { verifyToken, optionallyVerifyToken };
