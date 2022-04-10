'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workouts.init({
    workoutName: DataTypes.STRING,
    instruction: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Workouts',
    tableName: 'workouts'
  });
  return Workouts;
};