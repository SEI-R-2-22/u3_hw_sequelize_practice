'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('modelss', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      campaigns_booked: {
        type: Sequelize.INTEGER
      },
      lists: {
        type: Sequelize.INTEGER
      },
      agencyId: {
        type: Sequelize.INTEGER,
        field: 'agency_id',
        onDelete: 'CASCADE',
        references: {
          model: 'agencies',
          key: 'id'
        }
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
    await queryInterface.dropTable('modelss')
  }
}
