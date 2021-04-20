const Game = require("../models/game");
const User = require("../models/user");

const relations = async () => {
  Game.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });
  User.hasMany(Game, { foreignKey: "user_id", sourceKey: "id" });
};

module.exports = relations;
