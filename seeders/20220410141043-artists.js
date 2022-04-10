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
   return queryInterface.bulkInsert('artists',
   [
      {
        artist_band: 'Taylor Swift',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        artist_band: 'John Mayer',
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
    return queryInterface.bulkDelete('artists', null, {})
  }
};
