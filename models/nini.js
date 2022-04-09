'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Nini extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nini.init(
    {
      name: DataTypes.STRING,
      agency: DataTypes.STRING,
      booked_jobs: DataTypes.INTEGER,
      model_list: DataTypes.STRING,
      campaigns: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Nini',
      tableName: 'ninis'
    }
  )
  return Nini
}
