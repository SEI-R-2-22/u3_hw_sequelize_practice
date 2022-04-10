'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     'workoutRoutines', 
      [
        {
          routineName: 'Chest-Tri',
          restTime: '75sec',
          targetMuscle: 'Check, Triceps',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          routineName: 'Arms',
          restTime: '60sec',
          targetMuscle: 'Biceps, Triceps',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          routineName: 'Tree trunk legs',
          restTime: '90sec',
          targetMuscle: 'Glutes, Hamstrings, Quads',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('workoutRoutines', null, {})
  }
};