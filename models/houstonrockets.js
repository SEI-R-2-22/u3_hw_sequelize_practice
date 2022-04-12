'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HoustonRockets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HoustonRockets.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    pointsPerGame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'HoustonRockets',
    tableName: 'houston_rockets'
  });
  return HoustonRockets;
};