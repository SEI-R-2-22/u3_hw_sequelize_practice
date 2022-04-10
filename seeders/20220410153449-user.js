'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users', 
      [
        {
          firstName: 'Yusong',
          lastName: 'Shi',
          email: 'yshi@demo.com',
          password: 'Yusong',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'John',
          lastName: 'Wick',
          email: 'jwick@demo.com',
          password: 'Wick',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'John',
          lastName: 'Legend',
          email: 'jlegend@demo.com',
          password: 'Legend',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Lebron',
          lastName: 'James',
          email: 'ljames@demo.com',
          password: 'James',
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
   }
};
