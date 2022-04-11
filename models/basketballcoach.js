'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketballCoach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BasketballCoach.init({
    coachName: DataTypes.STRING,
    coachEthnicity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BasketballCoach',
    tableName: 'basketball_coaches',
  });
  return BasketballCoach;
};