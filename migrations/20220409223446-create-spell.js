'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('spells', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      damage: {
        type: Sequelize.INTEGER
      },
      damage_type: {
        type: Sequelize.STRING
      },
      ability_type: {
        type: Sequelize.STRING
      },
      mana_cost: {
        type: Sequelize.INTEGER
      },
      cooldown: {
        type: Sequelize.INTEGER
      },
      cast_range: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('spells');
  }
};