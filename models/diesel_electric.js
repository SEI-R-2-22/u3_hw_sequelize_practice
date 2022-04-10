'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diesel_Electric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Diesel_Electric.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    builder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diesel_Electric',
    tableName: 'diesel_electrics'
  });
  return Diesel_Electric;
};