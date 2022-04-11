'use strict'
const { Product } = require('./product')
const { Model, Deferrable } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Shopping_Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shopping_Cart.init(
    {
      product_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: Product,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      },
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Shopping_Cart',
      tableName: 'shopping_carts'
    }
  )
  return Shopping_Cart
}
