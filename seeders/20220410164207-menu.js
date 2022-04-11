'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('menus', [{
    //   name: 'Starters',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Pizzas',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Desserts',
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('menus', null, {});
  }
};
