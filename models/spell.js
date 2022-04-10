'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class spell extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  spell.init({
    name: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    damage_type: DataTypes.STRING,
    ability_type: DataTypes.STRING,
    mana_cost: DataTypes.INTEGER,
    cooldown: DataTypes.INTEGER,
    cast_range: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'spell',
  });
  return spell;
};