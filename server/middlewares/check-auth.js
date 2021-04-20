const jwt = require("jsonwebtoken");
const { verifyJwt, splitBearer } = require("../utils/jwt");

const checkAuth = (req, res, next) => {
  try {
    const token = splitBearer(req);
    if (!token) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const decodedToken = verifyJwt(token);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authenticated" });
  }
};

module.exports = checkAuth;
