'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class snack extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      snack.belongsTo(models.company, {foreignKey: 'company_num'})
      snack.belongsTo(models.main_ingredient, {foreignKey: 'main_ingredient_num'})
      snack.belongsTo(models.category, {foreignKey: 'category_num'})
    }
  }
  snack.init({
    name: DataTypes.STRING,
    company_id: DataTypes.STRING,
    main_ingredient_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'snack',
    tableName: 'snacks'
  });
  return snack;
};