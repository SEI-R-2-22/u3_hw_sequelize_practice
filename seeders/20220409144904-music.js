'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
    'music',
    [
      {
        title: 'Song1',
        duration: 320,
        genre: 'ballad',
        artist: 'Artist1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Song2',
        duration: 326,
        genre: 'country',
        artist: 'Artist2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Song3',
        duration: 470,
        genre: 'rap',
        artist: 'Artist3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('music', null, {})
  }
};
