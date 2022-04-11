'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
          username: 'janedoe123',
          password: '456doejane',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('users', null, {});
  }
};
