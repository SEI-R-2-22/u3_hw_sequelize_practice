'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('buyers',
      [
        {
          name: 'Jane Doe',
          age: 30,
          location: 'Washington, DC',
          cashLimit: 20000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {    
      return queryInterface.bulkDelete('buyers', null, {})   
  }
};
