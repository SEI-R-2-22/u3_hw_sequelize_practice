'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [...Array(100)].map((_) => {
      return {
        category: falso.randProductCategory(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('categories', categories)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories')
  }
}
