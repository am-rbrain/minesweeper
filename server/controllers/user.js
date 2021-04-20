const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { hashPassword, matchPassword } = require("../utils/password");
const { generateToken } = require("../utils/jwt");

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let user;
  try {
    user = await User.findOne({ where: { email } });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (!user) {
    return res.status(422).json({ message: "Invalid data" });
  }

  if (!(await matchPassword(password, user.password))) {
    return res.status(422).json({ message: "Invalid data" });
  }

  const token = generateToken({ userId: user.id }, "1h");

  res.status(200).json({ token, message: "Successfull login" });
};

const signup = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  let userExists;
  try {
    userExists = await User.findOne({ where: { email } });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  if (userExists) {
    return res.status(400).json({ message: "Email is not availiable " });
  }

  const hashedPassword = await hashPassword(password);

  let user;
  try {
    user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  const token = generateToken({ userId: user.id }, "1h");

  res.status(200).json({ token, message: "Successfull signup" });
};

module.exports = {
  login,
  signup,
};
