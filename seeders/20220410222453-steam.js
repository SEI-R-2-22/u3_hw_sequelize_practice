'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'steams',
      [
        {
          name: 'Union Pacific Big Boy',
          year: '1941',
          wheel: '4-8-8-4',
          builder: 'Union Pacific',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('steams',null, {})
  }
};
