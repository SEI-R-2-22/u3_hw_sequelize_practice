'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('apartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      bed: {
        type: Sequelize.INTEGER
      },
      bath: {
        type: Sequelize.INTEGER
      },
      sqft: {
        type: Sequelize.INTEGER
      },
      rent: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      buildingCode: {
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
    await queryInterface.dropTable('apartments');
  }
};