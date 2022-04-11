'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cars',
      [
        {
          make: 'Ford',
          model: 'Focus',
          color: 'Red',
          createdAt: new Date(),
          updatedAt: new Date()
          
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cars', null, {})
  }
}
