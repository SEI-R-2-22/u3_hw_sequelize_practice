'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Jenna',
          lastName: 'Leopold',
          email: 'jenna@leopold.com',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'workout_routines',
      [
        {
          title: 'First Workout Routine',
          targetRegion: 'lower body',
          trainingType: 'ballet barre',
          duration: '30 minutes',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'movements',
      [
        {
          name: 'plié',
          instructions:
            'stand with heels together, toes turned out, bend knees',
          sets: 3,
          reps: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
    await queryInterface.bulkDelete('workout_routines', null, {})
    await queryInterface.bulkDelete('movements', null, {})
  }
}
