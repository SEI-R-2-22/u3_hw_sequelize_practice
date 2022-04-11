'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('basketball_teams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamName: {
        type: Sequelize.STRING
      },
      arenaLocation: {
        type: Sequelize.STRING
      },
      teamCoach: {
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
    await queryInterface.dropTable('basketball_teams');
  }
};