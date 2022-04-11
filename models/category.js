'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      category.hasOne(models.main_ingredient, {foreignKey: 'category_num'})
      category.hasMany(models.snack, {foreignKey: 'category_num'})
      category.belongsTo(models.company, {foreignKey: 'company_num'})
    }
  }
  category.init({
    name: DataTypes.STRING,
    main_ingredient_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'category',
    tableName: 'categories'
  });
  return category;
};