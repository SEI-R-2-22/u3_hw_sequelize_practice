'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Wrestler extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Wrestler.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      grade: DataTypes.INTEGER,
      weightClass: DataTypes.INTEGER,
      isVarsity: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Wrestler',
      tableName: 'wrestlers'
    }
  )
  return Wrestler
}
