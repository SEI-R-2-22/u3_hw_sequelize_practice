'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'HoustonRockets',
     [
       {
         firstName:'Christain',
         lastName: 'Wood',
         position: 'C',
         pointsPerGame: 17.9,
         createdAt: new Date(),
         updatedAt: new Date()
        

       },

       {
        firstName:'Jalen',
        lastName: 'Green',
        position: 'SG',
        pointsPerGame: 16.9,
        createdAt: new Date(),
        updatedAt: new Date()
        

      },

      {
        firstName:'Kevin',
        lastName: 'Porter Jr',
        position: 'SG',
        pointsPerGame: 15.4,
        createdAt: new Date(),
        updatedAt: new Date()
        

      },

      {
        firstName:'JaeSean',
        lastName: 'Tate',
        position: 'SF',
        pointsPerGame: 11.9,
        createdAt: new Date(),
        updatedAt: new Date()
       
      },

      {
        firstName:'Alperen',
        lastName: 'Sengun',
        position: 'C',
        pointsPerGame: 9.6,
        createdAt: new Date(),
        updatedAt: new Date()
    
        

      },
       
     ])
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('HoustonRockets', null, {})
  }
};
