'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Apartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Apartment.init({
    name: DataTypes.STRING,
    bed: DataTypes.INTEGER,
    bath: DataTypes.INTEGER,
    sqft: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    status: DataTypes.STRING,
    code: DataTypes.STRING,
    buildingCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Apartment',
    tableName: 'apartments'
  });
  return Apartment;
};