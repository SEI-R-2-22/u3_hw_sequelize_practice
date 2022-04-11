'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'movies',
      [
        {
          name: 'Spirited Away',
          year: 2002,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: `Kiki's Delivery Service`,
          year: 2000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Princess Mononoke',
          year: 1997,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
