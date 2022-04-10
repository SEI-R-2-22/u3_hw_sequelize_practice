'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Horses.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    jumps: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horses',
    tableName: 'horses'
  });
  return Horses;
};