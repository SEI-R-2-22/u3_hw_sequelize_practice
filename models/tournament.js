'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tournament.init(
    {
      hostSchool: DataTypes.STRING,
      isVarsity: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Tournament',
      tableName: 'tournaments'
    }
  )
  return Tournament
}
