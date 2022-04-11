'use strict'
const falso = require('@ngneat/falso')
const Brand = require('../models/brand')
const Category = require('../models/category')
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [...Array(100)].map((_) => {
      return {
        price: falso.randNumber(),
        description: falso.randProductDescription(),
        name: falso.randProductName(),
        brand: falso.randBrand(),
        category: falso.randProductCategory(),
        reviews: falso.randNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('products', products)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products')
  }
}
