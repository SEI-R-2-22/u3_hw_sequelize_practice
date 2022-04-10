'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hero.init({
    name: DataTypes.STRING,
    primary_attribute: DataTypes.STRING,
    strength: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    intelligence: DataTypes.INTEGER,
    attack_min: DataTypes.INTEGER,
    attack_max: DataTypes.INTEGER,
    spell1: DataTypes.STRING,
    spell2: DataTypes.STRING,
    spell3: DataTypes.STRING,
    spell4: DataTypes.STRING,
    spell5: DataTypes.STRING,
    spell6: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hero',
  });
  return hero;
};