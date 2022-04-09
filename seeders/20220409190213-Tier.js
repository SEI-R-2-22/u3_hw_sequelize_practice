'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tiers', [
      {
        raidName: 'Sepulcher of the First Ones',
        expansion: 'Shadowlands',
        bossCount: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raidName: 'Icecrown Citadel',
      expansion: 'Battle for Azeroth',
        bossCount: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('tiers', null, {});
  }
};
