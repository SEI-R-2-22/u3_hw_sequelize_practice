
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
     'drills', 
      [
        {
          name: 'fireman drill',
          length: 40,
          difficulty: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('drills', null, {})
  }
};