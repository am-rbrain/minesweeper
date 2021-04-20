const timeDifferenceInSeconds = (end, start) => {
  const endDate = new Date(end);
  const startDate = new Date(start);

  const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

  return seconds;
};

module.exports = {
  timeDifferenceInSeconds,
};
