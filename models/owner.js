'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate(models) {
    }
  };
  Owner.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    petName: DataTypes.STRING,
    petBreed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Owner',
    tableName:'owners'
  });
  return Owner;
};