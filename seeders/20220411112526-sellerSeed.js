'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sellers',
      [
        {
          name: 'Tom Doe',
          bedrooms: 'Six',
          lotSize: 10000,
          squareFeet: 2400,
          location: 'Dallas, TX',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Sellers', null, {})
  }
};
