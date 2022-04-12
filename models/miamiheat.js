'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MiamiHeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MiamiHeat.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    pointsPerGame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MiamiHeat',
    tableName: 'miami_heat'
  });
  return MiamiHeat;
};