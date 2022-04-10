'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'horses',
      [
        {
          name: 'Ace',
          breed: 'Appaloosa',
          jumps: 'In training',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('horses', null, {})
  }
};
