'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketballPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BasketballPlayer.init({
    playerName: DataTypes.STRING,
    playerEthnicity: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BasketballPlayer',
    tableName: 'basketball_players',
  });
  return BasketballPlayer;
};