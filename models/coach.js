'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coach extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Coach.hasMany(models.SessionClass, {
        foreignKey: 'coach_id'
      })
    }
  }
  Coach.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    pronoun: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    profileimg_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Coach',
    tableName: 'coaches'
  });
  return Coach;
};