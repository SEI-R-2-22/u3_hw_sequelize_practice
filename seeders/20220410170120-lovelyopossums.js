'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert(
     'opossums',
     [
       {
         opossumName: 'Gilbert',
         opossumAge: '1',
         isOpossum: true,
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ]
   )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('opossums', null, {})
  }
};
