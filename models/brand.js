'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {}
  }
  Brand.init(
    {
      brand: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Brand',
      tableName: 'brands'
    }
  )
  return Brand
}
