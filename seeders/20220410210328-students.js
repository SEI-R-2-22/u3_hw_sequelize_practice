'use strict';
const falso = require('@ngneat/falso');

const fakestudents = [...Array(50)].map((st) => (
  {
    firstname: falso.randFirstName(),
    lastname: falso.randLastName(),
    pronoun: falso.randPronoun(),
    age: falso.randNumber({min:18, max:65}),
    email: falso.randEmail(),
    address: `${falso.randStreetAddress()} ${falso.randCity()}, ${falso.randState()}`,
    level: falso.randNumber({min: 1, max: 5}),
    payment_info: falso.randNumber({min: 1000000000000000, max:9999999999999999}),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('students', fakestudents, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    return queryInterface.bulkDelete('students', null, {});
  }
};
