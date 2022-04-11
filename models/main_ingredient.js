'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class main_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      main_ingredient.belongsTo(models.category, {foreignKey: 'category_num'})
      main_ingredient.hasMany(models.snack, {foreignKey: 'main_ingredient_num'})
    }
  }
  main_ingredient.init({
    name: DataTypes.STRING,
    category_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'main_ingredient',
    tableName: 'main_ingredients'
  });
  return main_ingredient;
};