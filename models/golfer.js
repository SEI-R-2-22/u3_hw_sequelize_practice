'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Golfer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Golfer.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      ranking: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Golfer',
      tableName: 'golfers'
    }
  )
  return Golfer
}
