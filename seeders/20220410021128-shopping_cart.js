'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const shopping_carts = [...Array(100)].map((_) => {
      return {
        quantity: falso.randNumber(),
        price: falso.randNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('shopping_carts', shopping_carts)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shopping_carts')
  }
}
