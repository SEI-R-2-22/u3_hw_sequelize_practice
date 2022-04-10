'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    brand: DataTypes.BIGINT,
    category: DataTypes.BIGINT,
    reviews: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};