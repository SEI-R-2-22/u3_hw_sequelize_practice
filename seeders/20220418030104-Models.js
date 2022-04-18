'use strict'

const { Agency, ModelsDot } = require('../models')
const falso = require('@ngneat/falso')

module.exports = {
  async up(queryInterface, Sequelize) {
    const a = await Agency.findAll({ raw: true })
    const m = await ModelsDot.findAll({ raw: true })
    const modelss = [...Array(500)].map((_) => {
      let r = Math.floor(Math.random() * a.length)
      let md = Math.floor(Math.random() * m.length)
      return {
        name: falso.randFullName(),
        campaigns_booked: falso.randNumber({ min: 1 }),
        lists: falso.randNumber({ min: 1 }),
        agency_id: a[r].id,
        modelsdot_id: m[md].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('modelss', modelss)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modelss')
  }
}
