'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('homes',
      [
        {
          bedrooms: 'Four',
          lotSize: 6500,
          squareFeet: 1786,
          location: 'Los Angeles, CA',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('homes', null, {})
  }
};
