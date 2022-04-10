'use strict'
const { Model, Deferrable } = require('sequelize')
const Brand = require('./brand')
const Category = require('./category')
const Review = require('./review')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      brand_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Brand,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      },
      category_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Category,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      },
      review_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Review,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      }
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'products'
    }
  )
  return Product
}
