'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'equipment',
      [
        {
          bitType: 'Pelham',
          bridleType: 'Western',
          saddleType: 'Western',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('equipment', null, {})
  }
};

