'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rockets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rockets.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    pointsPerGame: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rockets',
  });
  return Rockets;
};