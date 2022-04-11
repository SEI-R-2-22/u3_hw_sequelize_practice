'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vet extends Model {
    static associate(models) {
    }
  };
  Vet.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    animalSpecialty: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vet',
    tableName:'vets'
  });
  return Vet;
};