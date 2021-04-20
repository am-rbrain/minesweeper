const Game = require("../models/game");
const User = require("../models/user");
const Sequelize = require("../config/db");
const {
  generateMinutesPlayed,
  generateAverageScore,
} = require("../utils/game");
const { timeDifferenceInSeconds } = require("../utils/time");

const generateGameData = async (req, res, next) => {
  const boxes = Array(144)
    .fill()
    .map((_, index) => {
      return {
        id: index + 1,
        isSelected: false,
        isBomb: Math.random() < 0.2 ? true : false,
      };
    });
  const maxScore = boxes.filter((el) => !el.isBomb).length;

  return res.status(200).json({ boxes, maxScore });
};

const registerScore = async (req, res, next) => {
  const { userId } = req.userData;
  const { score, maxScore, start, end } = req.body;

  try {
    await Game.create({
      score: score,
      max_score: maxScore,
      user_id: userId,
      start: start,
      end: end,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  return res.status(201).json({ message: "Cool" });
};

const myGameResults = async (req, res, next) => {
  const { userId } = req.userData;
  const { page } = req.query;

  let results;
  try {
    results = await Game.findAndCountAll({
      where: { user_id: userId },
      order: [["id", "DESC"]],
      limit: 10,
      offset: parseInt(page) * 10 - 10,
      raw: true,
      nest: true,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  results.rows = results.rows.map((el) => {
    return {
      ...el,
      duration: timeDifferenceInSeconds(el.end, el.start),
    };
  });

  return res.status(200).json({ results });
};

const myGameStats = async (req, res, next) => {
  const { userId } = req.userData;

  let results;
  try {
    results = await Game.findAll({
      where: { user_id: userId },
      raw: true,
      nest: true,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  const gamesPlayed = results.length;
  const minutesPlayed = generateMinutesPlayed(results);
  const averageScore = generateAverageScore(results, gamesPlayed);

  return res.status(200).json({
    gamesPlayed,
    minutesPlayed,
    averageScore,
  });
};

const getGameRankings = async (req, res, next) => {
  const { page } = req.query;

  let rankings;
  try {
    rankings = await User.findAndCountAll({
      attributes: [
        "id",
        "fullname",
        [Sequelize.fn("MAX", Sequelize.col("Games.score")), "bestScore"],
      ],
      include: [
        {
          model: Game,
          duplicating: false,
          attributes: [],
        },
      ],
      group: "`Games`.`user_id`",
      order: [[Sequelize.fn("MAX", Sequelize.col("Games.score")), "DESC"]],
      limit: 10,
      offset: parseInt(page) * 10 - 10,
      distinct: true,
    });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  return res
    .status(200)
    .json({ rankings: rankings.rows, count: rankings.count.length });
};

const getRankingStats = async (req, res, next) => {
  let results;
  let playersAttended;
  try {
    results = await Game.findAll({
      raw: true,
      nest: true,
    });
    playersAttended = await User.count();
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }

  const minutesPlayed = generateMinutesPlayed(results);
  const averageScore = generateAverageScore(results, results.length);

  return res.status(200).json({
    playersAttended,
    minutesPlayed,
    averageScore,
  });
};

module.exports = {
  generateGameData,
  registerScore,
  myGameResults,
  myGameStats,
  getGameRankings,
  getRankingStats,
};
