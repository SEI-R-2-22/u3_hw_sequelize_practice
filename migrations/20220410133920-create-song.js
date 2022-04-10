'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('songs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artist_band_id: {
        type: Sequelize.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'artists',
          key: 'id',
          as: 'artist_band_id',
        }
      },
      song: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      composer: {
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
    await queryInterface.dropTable('songs');
  }
};