'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'tracks',
      [
        {
          trackName: 'If We Are',
          albumName: 'Fraudulent Decades',
          artistName: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Paseo Nights',
          albumName: 'Fraudulent Decades',
          artistName: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Toy Chairs',
          albumName: 'Fraudulent Decades',
          artistName: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: "Congratulations, You've Died!",
          albumName: 'Fraudulent Decades',
          artistName: 'Justice Silverbeard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Sell You Beautiful',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Prophetic',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Newsstand Rock(exposition)',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Overcome(with recapitulation)',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Never Slept So Soundly',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Taking Chase As The Serpent Slithers',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Republic',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Mastering The List',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Falling Down The Mountain',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Dinna-dawg(the inevitable onset of lunacy)',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Pal-treaux',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Decrescendo',
          albumName: 'The Resignation',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Untitled',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: '...And THe Battle Begun',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'In Her Drawer',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Only For The Night',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'On A Lonely Screen',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: '1980',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'One Million Miles An Hour, Fast Asleep',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Apparition',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'A Mouth Full Of Hollow Treats',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Epoxi-Lips',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Tainted Wheat',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'To Our Unborn Daughters',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Crushing Destroyer',
          albumName: '...And The Battle Begun',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'My Lonesome Only Friend',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: "It's Only Another Parsec...",
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Hope Is A Butterfly, No Net Its Captor...',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Hearts That Hanker For Mistake',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Mientras La Veo Sonar',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'March Of The Caterpillar',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'White Lies',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Bury It Down Low',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Breakfast Cat',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Bled To Be Free(The Operation)',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Bring Our Children Home Or Everything Is Nothing',
          albumName: 'Mandala',
          artistName: 'RX Bandits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'A Life Of Possibilities',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Memory Machine',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'What Do You Want Me To Say?',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Spider in the Snow',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'The Jitters',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'I Love A Magician',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'You Are Invited',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Gyroscope',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'The City',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: "Girl O' Clock",
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: '8 1/2 Minutes',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Back and Forth',
          albumName: 'Emergency And I',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Sentimental Man',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'The Face of the Earth',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Superpowers',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Pay for the Piano',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Come Home',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Secret Curse',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Automatic',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Following Through',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Time Bomb',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'The Other Side',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          trackName: 'Ellen and Ben',
          albumName: 'Change',
          artistName: 'Dismemberment Plan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tracks', null, {})
  }
}
