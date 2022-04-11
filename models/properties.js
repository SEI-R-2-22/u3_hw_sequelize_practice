'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Properties.init({
    occupancy: DataTypes.INTEGER,
    address: DataTypes.STRING,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    squareFeet: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties',
    tableName: 'properties'
  });
  return Properties;
};