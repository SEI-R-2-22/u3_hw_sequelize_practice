'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketballTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BasketballTeam.init({
    teamName: DataTypes.STRING,
    arenaLocation: DataTypes.STRING,
    teamCoach: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BasketballTeam',
    tableName: 'basketball_teams',
  });
  return BasketballTeam;
};