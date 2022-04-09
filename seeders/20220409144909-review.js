'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'reviews',
      [
        {
          name: 'Bob',
          comment: 'I love this song!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fran',
          comment: 'Perfect song for working out!',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Harry',
          comment: 'Song is too long!',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviews', null, {})
  }
};
