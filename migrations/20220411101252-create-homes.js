'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('homes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.STRING
      },
      lotSize: {
        type: Sequelize.INTEGER
      },
      squareFeet: {
        type: Sequelize.INTEGER
      },
      location: {
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
    await queryInterface.dropTable('homes');
  }
};