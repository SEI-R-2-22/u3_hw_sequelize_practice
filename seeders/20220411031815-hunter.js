'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hunters',
      [
        {
          firstName: 'John',
          lasName: 'Doe',
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hunters', null, {})
  }
}
