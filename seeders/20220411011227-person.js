'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'people',
      [
        {
          firstName: 'Tim',
          lastName: 'Apple',
          income: 100000,
          createdAt: new Date(),
          updatedAt: new Date()
          
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('people', null, {})
  }
}