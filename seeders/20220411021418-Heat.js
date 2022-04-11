'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'Heat',
     [
       {
         firstName: 'Jimmy ',
         lastName: 'Butler',
         position: 'SF',
         pointsPerGame: '21.4',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ],
     {}
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Heat', null, {})

  }
};
