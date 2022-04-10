'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'staff',
      [
        {
          firstName: 'John',
          lastName: 'Wayne',
          email: 'jwayne@cowboy.com',
          address: '1 Wild Wild West Street, WildTown, Wild West',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('staff', null, {})
  }
};

