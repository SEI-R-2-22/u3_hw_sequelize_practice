'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'Suns',
     [
       {
         firstName: 'Devin',
         lastName: 'Booker',
         position: 'SG',
         pointsPerGame: '26.8',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ],
     {}
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Suns', null, {})

  }
};

