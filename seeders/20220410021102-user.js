'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [...Array(100)].map((_) => {
      return {
        userName: falso.randUserName(),
        password: falso.randPassword(),
        email: falso.randEmail(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
}
