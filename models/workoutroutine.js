'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkoutRoutine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutRoutine.init({
    routineName: DataTypes.STRING,
    restTime: DataTypes.STRING,
    targetMuscle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkoutRoutine',
    tableName: 'workoutRoutines'
  });
  return WorkoutRoutine;
};