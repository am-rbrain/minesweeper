const express = require("express");
const router = express.Router();

const User = require("./user");
const Game = require("./game");

router.use("/user", User);
router.use("/game", Game);

module.exports = router;
