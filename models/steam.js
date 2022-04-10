'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Steam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Steam.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    wheel: DataTypes.STRING,
    builder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Steam',
    tableName: 'steams'
  });
  return Steam;
};