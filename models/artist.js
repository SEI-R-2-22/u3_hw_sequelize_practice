'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Artist.hasMany(models.Album, {
        foreignKey: 'artist_band_id',
        onDelete: "cascade" // When you delete the artist, every album gets deleted
      })
      Artist.hasMany(models.Song, {
        foreignKey: 'artist_band_id',
        onDelete: "cascade"
      })
    }
  }
  Artist.init({
    artist_band: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists'
  });
  return Artist;
};