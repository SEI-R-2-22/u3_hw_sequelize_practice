'use strict';
const falso = require('@ngneat/falso')
module.exports = {
  async up (queryInterface, Sequelize) {
    const errands = [...Array(10)].map((_) => {
      return {
        todo: falso.randJobType(),
        location: falso.randCity(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('errands', errands)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('errands')
   
  }
};
