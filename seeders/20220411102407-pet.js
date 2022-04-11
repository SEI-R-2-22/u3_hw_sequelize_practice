'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'pets',
      [
        {
          firstName: 'Nimbus',
          animalType: 'dog',
          breed: 'Australian Shepherd',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pets', null, {})
  
  }
};
