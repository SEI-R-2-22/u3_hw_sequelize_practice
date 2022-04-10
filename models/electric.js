'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Electric extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Electric.init({
    name: DataTypes.STRING,
    year: DataTypes.STRING,
    builder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Electric',
    tableName: 'electrics'
  });
  return Electric;
};