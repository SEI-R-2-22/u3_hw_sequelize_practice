'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("games", [
      {
        gameName: 'Viticulture',
        designer: 'Stonemaier',
        genres: ['worker placement', 'strategy', 'economic'],
        playtime: '45-90',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameName: 'Res Arcana',
        designer: 'Thomas Lehmann',
        genres: ['strategy', 'card game', 'drafting', 'hand managment'],
        playtime: '30-60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameName: 'Root',
        designer: 'Cole Wehrle',
        genres: ['strategy', 'wargame', 'area control', 'asymetric'],
        playtime: '60-90',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameName: 'Splendor',
        designer: 'Marc Andre',
        genres: ['Family', 'Open Draft', 'card game', 'resource managment'],
        playtime: '30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
