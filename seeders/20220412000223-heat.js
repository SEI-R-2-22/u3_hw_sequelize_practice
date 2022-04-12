'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'MiamiHeats',
     [
       {
         firstName:'Jimmy',
         lastName: 'Butler',
         position: 'SF',
         pointsPerGame: 21.4,
        createdAt: new Date(),
        updatedAt: new Date()

       
       },

       {
        firstName:'Tyler',
        lastName: 'Herro',
        position: 'PG',
        pointsPerGame: 20.7,
        createdAt: new Date(),
        updatedAt: new Date()

      

      },

      {
        firstName:'Bam',
        lastName: 'Adebayo',
        position: 'C',
        pointsPerGame: 19.1,
        createdAt: new Date(),
        updatedAt: new Date()


      

      },

      {
        firstName:'Kyle',
        lastName: 'Lowry',
        position: 'PG',
        pointsPerGame: 13.4,
        createdAt: new Date(),
        updatedAt: new Date()

        

      },

      {
        firstName:'Duncan',
        lastName: 'Robinson',
        position: 'SG',
        pointsPerGame: 10.9,
        createdAt: new Date(),
        updatedAt: new Date()

       
      },
       
     ])
    },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('MiamiHeats', null, {})
  }
};
