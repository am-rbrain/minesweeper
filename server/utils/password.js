const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashPassword = async (plainPassword) => {
  const hashedPassword = bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
};

const matchPassword = async (plainPassword, hashedPassword) => {
  const result = await bcrypt.compare(plainPassword, hashedPassword);
  return result;
};

module.exports = {
  hashPassword,
  matchPassword,
};
