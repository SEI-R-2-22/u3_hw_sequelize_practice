'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WideReceivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WideReceivers.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      routeRunning: DataTypes.STRING,
      hands: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'WideReceivers',
      tableName: 'wide_receivers'
    }
  )
  return WideReceivers
}
