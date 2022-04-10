'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('session_classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      day: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start_time: {
        type: Sequelize.TIME,
        allowNull: false
      },
      length: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      youth: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      coach_pay_type: {
        type: Sequelize.STRING
      },
      coach_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'coaches',
          key: 'id',
          as: 'coach_id'

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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('session_classes');
  }
};