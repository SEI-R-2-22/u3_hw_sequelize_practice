'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //static associate(models) {
      // define association here
    //}
  }
  Songs.init({
    name: DataTypes.STRING,
    songNum: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date
  }, {
    sequelize,
    modelName: 'Songs',
  });
  return Songs;
};