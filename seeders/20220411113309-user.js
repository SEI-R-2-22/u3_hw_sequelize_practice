"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: 'Trevor',
        lastName: 'Bond',
        userName: 'Tbond',
        password: 'asdf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Holly',
        lastName: 'Nelson',
        userName: 'HNelly',
        password: 'kjhg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Ed',
        lastName: 'Mang',
        userName: 'MangE',
        password: "poiu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Tom',
        lastName: 'Carney',
        userName: 'Kraken',
        password: 'qwer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  },
};
