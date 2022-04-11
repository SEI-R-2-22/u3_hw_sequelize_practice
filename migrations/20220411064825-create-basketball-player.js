'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('basketball_players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerName: {
        type: Sequelize.STRING
      },
      playerEthnicity: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('basketball_players');
  }
};