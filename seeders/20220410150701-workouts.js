'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     'workouts', 
      [
        {
          workoutName: 'Bench dips',
          instruction: 'Stand facing away from a bench, grab it with both hands at shoulder-width. Extend your legs out in front of you. Slowly lower your body by flexing at the elbows until your arm at forearm create a 90 degree angle.',
          sets: 4,
          reps: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('workouts', null, {})
  }
};
