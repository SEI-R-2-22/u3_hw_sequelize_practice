'use strict'
const { Model, Deferrable } = require('sequelize')
const Shopping_Cart = require('./shopping_cart')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      shopping_cart_id: {
        type: DataTypes.BIGINT,
        references: {
          model: Shopping_Cart,
          key: 'id',
          deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
