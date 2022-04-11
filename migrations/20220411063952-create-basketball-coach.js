'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('basketball_coaches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coachName: {
        type: Sequelize.STRING
      },
      coachEthnicity: {
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
    await queryInterface.dropTable('basketball_coaches');
  }
};