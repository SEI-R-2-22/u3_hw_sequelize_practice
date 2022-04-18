'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      campaign: {
        type: Sequelize.INTEGER
      },
      modelsdotId: {
        type: Sequelize.INTEGER,
        field: 'modelsdot_id',
        onDelete: 'CASCADE',
        references: {
          model: 'modelsdots',
          key: 'id'
        }
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
    await queryInterface.dropTable('agencies')
  }
}
