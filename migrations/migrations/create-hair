// 'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('hairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wash: {
        type: Sequelize.STRING
      },
      shampoo: {
        type: Sequelize.STRING
      },
      oils: {
        type: Sequelize.STRING
      },
      ricewater: {
        type: Sequelize.STRING
      },
      rinseout: {
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
    await queryInterface.dropTable('hairs')
  }
}