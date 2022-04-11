'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class aromatic_herb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  aromatic_herb.init(
    {
      name: DataTypes.STRING,
      treatment: DataTypes.STRING,
      cost: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'aromatic_herb',
      tableName: 'aromatic_herb'
    }
  )
  return aromatic_herb
}
