'use strict'

const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const modelsdots = [...Array(1000)].map((s) => ({
      name: falso.randFullName(),
      shows_walked: falso.randNumber({ min: 1, max: 2000 }),
      list: falso.randNumber(),
      campaigns: falso.randNumber(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('modelsdots', modelsdots)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modelsdots')
  }
}
