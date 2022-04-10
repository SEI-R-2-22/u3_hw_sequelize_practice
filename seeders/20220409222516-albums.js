'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Albums', [
    {name: 'the White Album', songs: 30},
    {name: 'Let It Be', songs: 12},
    {name: 'Abbey Road', songs: 17},
    {name: 'Sgt Peppers Lonely Hearts Club Band', songs: 13},
    {name: 'The Magical Mystery Tour', songs: 11}
  ]);
    /*
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums', null, {});
    
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
