'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Paul',
          username: 'paulpaul',
          password: 'paulpaul',
          email: 'paulemail@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Faith',
          username: 'faithfaith',
          password: 'faithfaith',
          email: 'faithemail@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ran',
          username: 'ranran',
          password: 'ranran',
          email: 'ranemail@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
