'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert(
     'dogs',
     [
       {
         dogName: 'Winny',
         dogAge: '12',
         dogBreed: 'Chocolate Lab',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         dogName: 'Shadow',
         dogAge: 'None',
         dogBreed: 'Black Lab, German Shepard mix',
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ], {}
   )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dogs', null, {})
  }
};
