'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    'music',
    [
      {
        title: 'Song1',
        duration: '320',
        genre: 'ballad',
        artist: 'Artist1'
      },
      {
        title: 'Song2',
        duration: '326',
        genre: 'country',
        artist: 'Artist2'
      },
      {
        title: 'Song3',
        duration: '470',
        genre: 'rap',
        artist: 'Artist3'
      }
    ]
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('music', null, {})
  }
};
