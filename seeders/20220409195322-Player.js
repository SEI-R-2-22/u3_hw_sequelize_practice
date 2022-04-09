'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('players', [
      {
        playerName: 'Elsie',
        class: 'Monk',
        role_id: 1,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Shadadin',
        class: 'Paladin',
        role_id: 1,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Rothalexkon',
        class: 'Priest',
        role_id: 2,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Grik',
        class: 'Shaman',
        role_id: 2,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Kunaii',
        class: 'Demon Hunter',
        role_id: 4,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Filthycasual',
        class: 'Demon Hunter',
        role_id: 4,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Ivur',
        class: 'Warrior',
        role_id: 5,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Piigeon',
        class: 'Warrior',
        role_id: 5,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Tylandar',
        class: 'Paladin',
        role_id: 5,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Decays',
        class: 'Death Knight',
        role_id: 5,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Garbodorlol',
        class: 'Hunter',
        role_id: 7,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Winryrockbel',
        class: 'Hunter',
        role_id: 7,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Rynaidrosa',
        class: 'Warlock',
        role_id: 8,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Zanduil',
        class: 'Warlock',
        role_id: 8,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Rongondan',
        class: 'Shaman',
        role_id: 8,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Aldeshar',
        class: 'Mage',
        role_id: 8,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Konnovar',
        class: 'Mage',
        role_id: 8,
        raid_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Mordenkainen',
        class: 'Shaman',
        role_id: 2,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Ziggie',
        class: 'Druid',
        role_id: 2,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Demonred',
        class: 'Paladin',
        role_id: 3,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Samarkand',
        class: 'Warrior',
        role_id: 3,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Themurloc',
        class: 'Paladin',
        role_id: 5,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Funkydelic',
        class: 'Death Knight',
        role_id: 5,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Psycadelic',
        class: 'Death Knight',
        role_id: 5,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Chrispm',
        class: 'Warrior',
        role_id: 5,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Kaedas',
        class: 'Rogue',
        role_id: 6,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        playerName: 'Licantros',
        class: 'Mage',
        role_id: 8,
        raid_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tiers', null, {});
  }
};
