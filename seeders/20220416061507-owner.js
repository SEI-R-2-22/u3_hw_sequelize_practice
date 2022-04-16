'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const owners = [...Array(10)].map((_) => {
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        email: falso.randEmail(),
        petName: falso.randFirstName(),
        petBreed: falso.randAnimalType(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('owners', owners)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('owners')
  }
};
