'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'members', 
      [
        {
          firstname: 'GJ',
          lastname: 'Haaland',
          age: 33,
          position: 'power forward',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: 'Lo',
          lastname: 'Phillips',
          age: 33,
          position: 'point guard',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: 'Sam',
          lastname: 'Iapoce',
          age: 30,
          position: 'center',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstname: 'Dina',
          lastname: 'kazan',
          age: 30,
          position: 'shooting guard',
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('members', null, {})
   }
};