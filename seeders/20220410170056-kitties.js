'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'cats',
      [
        {
          catName: 'Blimpo',
          catAge: '3',
          catBreed: 'brown',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cats', null, {})
  }
};
