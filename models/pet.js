'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    static associate(models) {
    }
  };
  Pet.init({
    firstName: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet',
    tableName:'pets'
  });
  return Pet;
};