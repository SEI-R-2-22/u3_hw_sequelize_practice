'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FavoriteOrder.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      })
      FavoriteOrder.hasMany(models.Item, {
        foreignKey: 'item_id',
        onDelete: 'CASCADE'
      })
    }
  }
  FavoriteOrder.init({
    item_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteOrder',
    tableName: 'favorite_orders'
  });
  return FavoriteOrder;
};