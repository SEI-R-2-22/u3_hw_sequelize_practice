'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'reviews',
      {
        name: 'Bob',
        text: 'I love this song!'
      },
      {
        name: 'Fran',
        text: 'Perfect song for working out!'
      },
      {
        name: 'Harry',
        text: 'Song is too long!'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviews', null, {})
  }
};
