'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      company.hasOne(models.category, {foreignKey: 'company_num'})
      company.hasMany(models.snack, {foreignKey: 'company_num'})
    }
  }
  company.init({
    name: DataTypes.STRING,
    categories: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'company',
    tableName: 'companies'
  });
  return company;
};