'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SessionClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SessionClass.belongsTo(models.Coach, {
        foreignKey: 'coach_id'
      })
    }
  }
  SessionClass.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    day: DataTypes.STRING,
    start_time: DataTypes.TIME,
    length: DataTypes.INTEGER,
    youth: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    coach_pay_type: DataTypes.STRING,
    coach_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SessionClass',
    tableName: 'session_classes'
  });
  
  return SessionClass;
};   