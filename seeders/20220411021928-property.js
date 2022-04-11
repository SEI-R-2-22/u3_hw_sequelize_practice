'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'properties',
      [
        {
          occupancy: 2,
          address: '120 Riverview Way',
          bedrooms: 1,
          bathrooms: 1,
          squareFeet: 560,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          occupancy: 4,
          address: '44 Fourth St.',
          bedrooms: 2,
          bathrooms: 1,
          squareFeet: 890,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          occupancy: 6,
          address: '18 Alabama St.',
          bedrooms: 3,
          bathrooms: 3,
          squareFeet: 1200,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          occupancy: 16,
          address: 'Skippy Fun Lane',
          bedrooms: 7,
          bathrooms: 6,
          squareFeet: 3000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          occupancy: 10,
          address: '18 Gloop Cir.',
          bedrooms: 5,
          bathrooms: 3,
          squareFeet: 2200,
          createdAt: new Date(),
          updatedAt: new Date()
        }

      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('properties', null, {})
  }
};
