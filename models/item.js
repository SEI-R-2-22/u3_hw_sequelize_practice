'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    damage_type: DataTypes.STRING,
    gold_cost: DataTypes.INTEGER,
    mana_cost: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};