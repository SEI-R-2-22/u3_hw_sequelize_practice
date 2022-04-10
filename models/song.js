'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Artist, {
        foreignKey: 'artist_band_id',
        onDelete: 'cascade'
      })
    }
  }
  Song.init({
    song: DataTypes.STRING,
    time: DataTypes.STRING,
    composer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
    tableName: 'songs'
  });
  return Song;
};