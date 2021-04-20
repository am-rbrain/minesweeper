const express = require("express");
const router = express.Router();

const {
  generateGameData,
  registerScore,
  myGameResults,
  myGameStats,
  getGameRankings,
  getRankingStats,
} = require("../controllers/game");

const checkAuth = require("../middlewares/check-auth");

const {
  GENERATE_GAME_DATA,
  REGISTER_SCORE,
  MY_GAME_RESULTS,
  MY_GAME_STATS,
  GAME_RANKINGS,
  RANKING_STATS,
} = require("./enums");

router.use(checkAuth);

router.get(GAME_RANKINGS, getGameRankings);
router.get(GENERATE_GAME_DATA, generateGameData);
router.get(MY_GAME_RESULTS, myGameResults);
router.get(MY_GAME_STATS, myGameStats);
router.get(RANKING_STATS, getRankingStats);
router.post(REGISTER_SCORE, registerScore);

module.exports = router;
