'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sellers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sellers.init({
    name: DataTypes.STRING,
    bedrooms: DataTypes.STRING,
    lotSize: DataTypes.INTEGER,
    squareFeet: DataTypes.INTEGER,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sellers',
    tableName: 'sellers'
  });
  return Sellers;
};