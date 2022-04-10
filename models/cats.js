'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cats.init({
    catName: DataTypes.STRING,
    catAge: DataTypes.STRING,
    catBreed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cats',
    tableName: 'cats'
  });
  return Cats;
};