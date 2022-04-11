'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'characters',
      [
        {
          name: 'Chihiro',
          gender: 'female',
          age: 10,
          movie: 'Spirited Away',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Haku',
          gender: 'male',
          age: 12,
          movie: 'Spirited Away',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Kiki',
          gender: 'female',
          age: 13,
          movie: `Kiki's Delivery Service`,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('characters', null, {})
  }
};
