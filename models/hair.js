//"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hair extends Model {
    static associate(models) {}
  }
  Hair.init(
    {
      wash: DataTypes.STRING,
      shampoo: DataTypes.STRING,
      oils: DataTypes.STRING,
      ricewater: DataTypes.STRING,
      rinseout: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hair",
      tableName: "hairs",
    }
  );
  return Hair;
};
