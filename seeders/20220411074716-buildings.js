'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'buildings',
      [
        {
          name: '2222 Augusta',
          address: '2222 W Augusta Blvd',
          floors: 3,
          units: 4,
          parking: 3,
          code: 'AUG',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '3119 Hoyne',
          address: '3119 N Hoyne Ave',
          floors: 2,
          units: 2,
          parking: 2,
          code: 'HOY',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
     
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('buildings', null, {})
  }
};

