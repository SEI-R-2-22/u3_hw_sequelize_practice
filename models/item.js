'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Menu, {
        foreignKey: 'menu_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Item.init({
    name: DataTypes.STRING,
    menu_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items'
  });
  return Item;
};