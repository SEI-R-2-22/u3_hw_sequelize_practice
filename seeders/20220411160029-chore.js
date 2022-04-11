'use strict';
const falso = require('@ngneat/falso')
module.exports = {
  async up (queryInterface, Sequelize) {
    const chores = [...Array(10)].map((_) => {
      return {
        todo: falso.randJobType(),
        location: "home",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('chores', chores, {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chores')
   
  }
};
