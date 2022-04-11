'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'jobs',
      [
        {
          name: 'Software Engineer',
          hoursPerWeek: 35,
          remote: true,
          createdAt: new Date(),
          updatedAt: new Date()
          
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {})
  }
}

