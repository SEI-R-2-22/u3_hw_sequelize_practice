'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'PhoenixSuns',
     [
       {
         firstName:'Devin',
         lastName: 'Booker',
         position: 'SG',
         pointsPerGame: 26.8,
         createdAt: new Date(),
         updatedAt: new Date()
     
       },

       {
        firstName:'Deandre',
        lastName: 'Ayton',
        position: 'C',
        pointsPerGame: 17.2,
        createdAt: new Date(),
        updatedAt: new Date()

      },

      {
        firstName:'Chris',
        lastName: 'Paul',
        position: 'PG',
        pointsPerGame: 14.7,
        createdAt: new Date(),
        updatedAt: new Date()

       

      },

      {
        firstName:'Mikal',
        lastName: 'Bridges',
        position: 'SF',
        pointsPerGame: 14.3,
        createdAt: new Date(),
        updatedAt: new Date()

        

      },

      {
        firstName:'Cameron',
        lastName: 'Payne',
        position: 'PG',
        pointsPerGame: 10.8,
        createdAt: new Date(),
        updatedAt: new Date()

    

      },
       
     ])
    },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PhoenixSuns', null, {})
  }
};
