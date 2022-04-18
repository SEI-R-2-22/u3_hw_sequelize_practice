"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Scrub extends Model {
    static associate(models) {}
  }
  Scrub.init(
    {
      loofa: DataTypes.STRING,
      rinse: DataTypes.STRING,
      scrub: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Scrub",
      tableName: "scrubs",
    }
  );
  return Scrub;
};
