
// 'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('selfcare', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        oil: {
          type: Sequelize.STRING
        },
        lotion: {
          type: Sequelize.STRING
        },
        spray: {
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
      })
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable('selfcare')
    }
  }