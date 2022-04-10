'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Opossums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Opossums.init({
    opossumName: DataTypes.STRING,
    opossumAge: DataTypes.STRING,
    isOpossum: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Opossums',
    tableName: 'opossums'
  });
  return Opossums;
};