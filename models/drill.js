'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drill.init({
    name: DataTypes.STRING,
    length: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drill',
    tableName: 'drills'
  });
  return Drill;
};