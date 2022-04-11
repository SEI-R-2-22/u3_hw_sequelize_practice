'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class errands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  errands.init({
    todo: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'errands',
    tableName: 'errands'
  });
  return errands;
};