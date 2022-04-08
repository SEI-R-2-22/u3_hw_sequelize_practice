'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'albums',
      [
        {
          albumName: 'Fraudulent Decades',
          albumArtist: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: 'The Resignation',
          albumArtist: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: '...And The Battle Begun',
          albumArtist: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: 'Mandala',
          albumArtist: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: 'Emergency and I',
          albumArtist: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          albumName: 'Change',
          albumArtist: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('albums', null, {})
  }
}
