'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Quarterbacks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quarterbacks.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      throwAccuracy: DataTypes.STRING,
      throwPower: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Quarterbacks',
      tableName: 'quarterbacks'
    }
  )
  return Quarterbacks
}
