'use strict';
const falso = require('@ngneat/falso')

module.exports = {
  async up (queryInterface, Sequelize) {
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
    // const owners = [...Array(10)].map((_) => {
    //   return {
    //     firstName: falso.randFirstName(),
    //     lastName: falso.randLastName(),
    //     email: falso.randEmail(),
    //     petName: falso.randFirstName,
    //     petBreed: falso.randAnimalType,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // })
    // const pets = [...Array(10)].map((_) => {
    //   return {
    //     firstName: falso.randFirstName(),
    //     breed: falso.randAnimalType,
    //     age: falso.randNumber({ min: 0, max: 30 }),
    //     createdAt: new Date (),
    //     updatedAt: new Date ()
    //   }
    // })
    await queryInterface.bulkInsert('vets', vets)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('vets', 
    // 'owners', 
    // 'pets', 
    null, {});
  }
};
