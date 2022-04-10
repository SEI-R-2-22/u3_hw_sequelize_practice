'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const reviews = [...Array(100)].map((_) => {
      return {
        comments: falso.randCatchPhrase(),
        rating: falso.randNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('reviews', reviews)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews')
  }
}
