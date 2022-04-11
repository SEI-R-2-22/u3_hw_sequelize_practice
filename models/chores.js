'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chores.init({
    todo: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chores',
    tableName: 'chores',
  });
  return chores;
};