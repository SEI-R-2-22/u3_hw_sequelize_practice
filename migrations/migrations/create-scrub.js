/// I KNOW hw needs migrate in order to work. but i figured i would at least do the code to show i know the stuff
//// couldnt get migrate to work on terminal so did the work with classmate and followed along with her and did my code in here.
/// i understand this assigntment-- struggled with terminal. something about downloading mysql12


// 'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('scrubs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        loofa: {
          type: Sequelize.STRING
        },
        rinse: {
          type: Sequelize.STRING
        },
        scrub: {
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
      await queryInterface.dropTable('scrubs')
    }
  }