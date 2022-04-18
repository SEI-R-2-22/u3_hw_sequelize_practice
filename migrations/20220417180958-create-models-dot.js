'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modelsdots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      shows_walked: {
        type: Sequelize.INTEGER
      },
      list: {
        type: Sequelize.INTEGER
      },
      campaigns: {
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('modelsdots')
  }
}
