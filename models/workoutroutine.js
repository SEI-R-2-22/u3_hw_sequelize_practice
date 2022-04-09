'use strict'
const { Model } = require('sequelize')
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
  WorkoutRoutine.init(
    {
      title: DataTypes.STRING,
      targetRegion: DataTypes.STRING,
      trainingType: DataTypes.STRING,
      duration: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'WorkoutRoutine',
      tableName: 'workout_routines'
    }
  )
  return WorkoutRoutine
}
