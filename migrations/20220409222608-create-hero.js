'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      primary_attribute: {
        type: Sequelize.STRING
      },
      strength: {
        type: Sequelize.INTEGER
      },
      agility: {
        type: Sequelize.INTEGER
      },
      intelligence: {
        type: Sequelize.INTEGER
      },
      attack_min: {
        type: Sequelize.INTEGER
      },
      attack_max: {
        type: Sequelize.INTEGER
      },
      spell1: {
        type: Sequelize.STRING
      },
      spell2: {
        type: Sequelize.STRING
      },
      spell3: {
        type: Sequelize.STRING
      },
      spell4: {
        type: Sequelize.STRING
      },
      spell5: {
        type: Sequelize.STRING
      },
      spell6: {
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
    await queryInterface.dropTable('heros');
  }
};