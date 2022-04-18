'use strict'

const { ModelsDot } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const modelsdots = await ModelsDot.findAll({ raw: true })
    const agencies = [...Array(50)].map((_, i) => ({
      name: falso.randWord(),
      campaign: falso.randNumber({ min: 10 }),
      modelsdot_id: modelsdots[i].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('agencies', agencies)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('agencies')
  }
}
