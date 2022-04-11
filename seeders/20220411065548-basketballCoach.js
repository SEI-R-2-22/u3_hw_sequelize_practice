'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'basketball_coaches',
      [
        {
          coachName: 'Wes Unseld Jr.',
          coachEthnicity: 'African-American',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('basketball_coaches', null, {})
  }
};