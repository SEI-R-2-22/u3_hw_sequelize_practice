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
   return queryInterface.bulkInsert('albums',
   [
     {
        artist_band_id: 1,
        title: 'Red',
        year: 2021,
        label: 'Republic',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        artist_band_id: 2,
        title: 'Sob Rock',
        year: 2021,
        label: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        artist_band_id: 2,
        title: 'Battle Studuios',
        year: 2009,
        label: 'Columbia',
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
    return queryInterface.bulkDelete('albums')
  }
};
