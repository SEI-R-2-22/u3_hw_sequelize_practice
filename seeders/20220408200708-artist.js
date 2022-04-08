'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'artists',
      [
        {
          name: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists', null, {})
  }
}
