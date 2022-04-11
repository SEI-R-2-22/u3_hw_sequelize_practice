'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'apartments',
      [
        {
          name: 'Unit 1',
          bed: 2,
          bath: 1,
          sqft: 900,
          rent: 2000,
          status: 'Vacant',
          code: '1',
          buildingCode: 'AUG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Unit 2',
          bed: 2,
          bath: 1,
          sqft: 900,
          rent: 2100,
          status: 'Leased',
          code: '2',
          buildingCode: 'AUG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Unit 3',
          bed: 2,
          bath: 1,
          sqft: 900,
          rent: 2200,
          status: 'Leased',
          code: '3',
          buildingCode: 'AUG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Garden Unit',
          bed: 2,
          bath: 1,
          sqft: 800,
          rent: 1650,
          status: 'Leased',
          code: 'G',
          buildingCode: 'AUG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('apartments', null, {});
  }
};
