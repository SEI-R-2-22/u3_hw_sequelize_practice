'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const brands = [...Array(100)].map((_) => {
      return {
        brand: falso.randBrand(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('brands', brands)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('brands')
  }
}
