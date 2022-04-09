'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  albums.init({
    name: DataTypes.STRING,
    songs: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'albums',
  });
  return albums;
};




