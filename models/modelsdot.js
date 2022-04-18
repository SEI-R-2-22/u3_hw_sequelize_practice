'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ModelsDot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModelsDot.hasMany(models.Models, { foreignKey: 'modelsdot_id' })
      ModelsDot.hasMany(models.Agency, { foreignKey: 'modelsdot_id' })
      // define association here
    }
  }
  ModelsDot.init(
    {
      name: DataTypes.STRING,
      shows_walked: DataTypes.INTEGER,
      list: DataTypes.INTEGER,
      campaigns: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'ModelsDot',
      tableName: 'modelsdots'
    }
  )
  return ModelsDot
}
