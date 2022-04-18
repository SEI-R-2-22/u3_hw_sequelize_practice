'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const vets = [...Array(10)].map((_) => {
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        email: falso.randEmail(),
        animalSpecialty: falso.randAnimalType(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('vets', vets)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('vets')
  }
};
