const express = require("express");
const router = express.Router();

const { USER_LOGIN, USER_SIGNUP } = require("./enums");
const { login, signup } = require("../controllers/user");

router.post(USER_LOGIN, login);
router.post(USER_SIGNUP, signup);

module.exports = router;
