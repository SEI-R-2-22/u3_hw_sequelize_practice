'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Models.belongsTo(models.Agency, { foreignKey: 'agency_id' })
      Models.belongsTo(models.ModelsDot, { foreignKey: 'modelsdot_id' })
    }
  }
  Models.init(
    {
      name: DataTypes.STRING,
      campaigns_booked: DataTypes.INTEGER,
      lists: DataTypes.INTEGER,
      agencyId: {
        type: DataTypes.INTEGER,
        field: 'agency_id',
        onDelete: 'CASCADE',
        references: {
          model: 'agencies',
          key: 'id'
        }
      },
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
      modelName: 'Models',
      tablename: 'modelss'
    }
  )
  return Models
}
