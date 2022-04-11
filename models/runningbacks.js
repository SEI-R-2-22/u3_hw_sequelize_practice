'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Runningbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Runningbacks.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      speed: DataTypes.STRING,
      jukeMove: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Runningbacks',
      tableName: 'runningbacks'
    }
  )
  return Runningbacks
}
