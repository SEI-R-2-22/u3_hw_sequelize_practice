'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('songs',
   [
     {
      artist_band_id: 1,
      song: 'All Too Well',
      time: '5:29',
      composer: 'Swift - Rose',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      artist_band_id: 1,
      song: 'The Very First Night',
      time: '3:20',
      composer: 'Swift - Amund Bjørklund - Espen Lind',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      artist_band_id: 1,
      song: '22',
      time: '3:50',
      composer: 'Swift - Martin - Shellback',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      artist_band_id: 2,
      song: 'Wild Blue',
      time: '4:12',
      composer: 'John Mayer',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      artist_band_id: 2,
      song: 'New Light',
      time: '3:37',
      composer: 'John Mayer - Ernest Wilson',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      artist_band_id: 2,
      song: 'Heartbrake Warfare',
      time: '4:30',
      composer: 'John Mayer',
      createdAt: new Date(),
      updatedAt: new Date()
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('songs')
  }
};
