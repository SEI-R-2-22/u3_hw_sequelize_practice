'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  player.init({
    name: DataTypes.STRING,
    hero_id: DataTypes.INTEGER,
    item1_id: DataTypes.INTEGER,
    item2_id: DataTypes.INTEGER,
    item3_id: DataTypes.INTEGER,
    item4_id: DataTypes.INTEGER,
    item5_id: DataTypes.INTEGER,
    item6_id: DataTypes.INTEGER,
    gold: DataTypes.INTEGER,
    health: DataTypes.INTEGER,
    mana: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};