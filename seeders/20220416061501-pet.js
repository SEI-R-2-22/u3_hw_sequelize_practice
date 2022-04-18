'use strict';

const falso = require('@ngneat/falso');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const pets = [...Array(10)].map((_) => {
      return {
        firstName: falso.randFirstName(),
        breed: falso.randAnimalType(),
        age: falso.randNumber({ min: 0, max: 30 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('pets', pets)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pets')
  }
};
