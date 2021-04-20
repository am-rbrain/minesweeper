const jwt = require("jsonwebtoken");

const generateToken = (data, time) => {
  const token = jwt.sign(data, process.env.APP_SECRET, { expiresIn: time });
  return token;
};

const verifyJwt = (token) => {
  return jwt.verify(token, process.env.APP_SECRET);
};

const splitBearer = (req) => {
  return req.headers.authorization.split(" ")[1];
};

module.exports = {
  generateToken,
  verifyJwt,
  splitBearer,
};
