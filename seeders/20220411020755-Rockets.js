'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'Rockets',
     [
       {
         firstName: 'Christian',
         lastName: 'Wood',
         position: 'C',
         pointsPerGame: '17.9',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ],
     {}
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rockets', null, {})

  }
};
