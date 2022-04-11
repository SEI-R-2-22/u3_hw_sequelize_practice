'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Michelle',
          lastName: 'Flores',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
    
    
    /**
     * 
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
