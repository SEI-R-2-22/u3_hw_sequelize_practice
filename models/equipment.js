'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Equipment.init({
    bitType: DataTypes.STRING,
    bridleType: DataTypes.STRING,
    saddleType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipment',
    tableName: 'equipment'
  });
  return Equipment;
};