'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warmdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Warmdown.init({
    name: DataTypes.STRING,
    length: DataTypes.INTEGER,
    drill: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Warmdown',
    tableName: 'warmdowns'
  });
  return Warmdown;
};