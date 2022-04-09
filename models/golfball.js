'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Golfball extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Golfball.init(
    {
      name: DataTypes.STRING,
      brand: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Golfball',
      tableName: 'golfballs'
    }
  )
  return Golfball
}
