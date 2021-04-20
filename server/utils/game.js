const { timeDifferenceInSeconds } = require("./time");

const generateMinutesPlayed = (results) => {
  return (
    results
      .map((el) => ({ duration: timeDifferenceInSeconds(el.end, el.start) }))
      .reduce((acc, el) => acc + el.duration, 0) / 60
  ).toFixed(2);
};

const generateAverageScore = (results, gamesPlayed) => {
  return (
    parseInt(
      (
        results
          .map((el) => ({ score: el.score }))
          .reduce((acc, el) => acc + el.score, 0) / gamesPlayed
      ).toFixed(2)
    ) || 0
  );
};

module.exports = {
  generateMinutesPlayed,
  generateAverageScore,
};
