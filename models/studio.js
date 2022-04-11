'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Studio.init({
    affiliation: DataTypes.STRING,
    founded: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Studio',
    tableName: 'studios'
  });
  return Studio;
};