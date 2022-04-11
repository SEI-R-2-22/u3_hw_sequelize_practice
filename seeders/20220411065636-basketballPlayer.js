'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'basketball_players',
      [
        {
          playerName: 'Rui Hachimura',
          playerEthnicity: 'Japanese',
          team: 'Wizards',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('basketball_players', null, {})
  }
};
