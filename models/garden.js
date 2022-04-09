'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Garden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Garden.init(
    {
      gardenType: DataTypes.STRING,
      dirtType: DataTypes.STRING,
      plantType: DataTypes.STRING,
      waterSchedule: DataTypes.STRING,
      plantCount: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Garden',
      tableName: 'gardens'
    }
  )
  return Garden
}
