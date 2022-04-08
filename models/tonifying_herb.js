'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tonifying_herb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tonifying_herb.init(
    {
      name: DataTypes.STRING,
      treatment: DataTypes.STRING,
      cost: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'tonifying_herb',
      tableName: 'tonifying_herb'
    }
  )
  return tonifying_herb
}
