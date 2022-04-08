'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wrestlers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      grade: {
        type: Sequelize.INTEGER
      },
      weightClass: {
        type: Sequelize.INTEGER
      },
      isVarsity: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('wrestlers')
  }
}
