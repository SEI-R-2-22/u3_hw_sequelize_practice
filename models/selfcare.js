"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Selfcare extends Model {
    static associate(models) {}
  }
  Selfcare.init(
    {
      oilType: DataTypes.STRING,
      lotionType: DataTypes.STRING,
      sprayType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Selfcare",
      tableName: "selfcare",
    }
  );
  return Selfcare;
};
