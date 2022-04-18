'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Agency.belongsTo(models.ModelsDot, { foreignKey: 'modelsdot_id' })
      Agency.hasMany(models.Models, { foreignKey: 'agency_id' })
    }
  }
  Agency.init(
    {
      name: DataTypes.STRING,
      campaign: DataTypes.INTEGER,
      modelsdotId: {
        type: DataTypes.INTEGER,
        field: 'modelsdot_id',
        onDelete: 'CASCADE',
        references: {
          model: 'modelsdots',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Agency',
      tableName: 'agencies'
    }
  )
  return Agency
}
