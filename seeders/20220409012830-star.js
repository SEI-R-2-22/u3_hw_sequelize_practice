'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'stars',
      [
        {
          name: 'Sirius',
          type: 'A1Vm',
          lightYears: 8,
          constellation: 'Canis Major',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Canopus',
          type: 'F',
          lightYears: 74,
          constellation: 'Carina',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alpha Centauri',
          type: 'G2V',
          lightYears: 4,
          constellation: 'Centaurus',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Arcturus',
          type: 'K5',
          lightYears: 34,
          constellation: 'Bootes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Vega',
          type: 'A',
          lightYears: 25,
          constellation: 'Lyra',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Capella',
          type: 'G5',
          lightYears: 41,
          constellation: 'Auriga',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rigel',
          type: 'B8',
          lightYears: 860,
          constellation: 'Orion',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Procyon',
          type: 'F5',
          lightYears: 11,
          constellation: 'Canis Minor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Achernar',
          type: 'B',
          lightYears: 139,
          constellation: 'Eridanus',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Betelgeuse',
          type: 'M1',
          lightYears: 1500,
          constellation: 'Orion',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stars', null, {})
  }
}
