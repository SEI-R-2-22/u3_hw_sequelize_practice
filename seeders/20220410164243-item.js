'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // await queryInterface.bulkInsert('items', [{
    //   name: 'Garlic Knots',
    //   menu_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Chicken Wings',
    //   menu_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Cheesy Bread',
    //   menu_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Laua Pizza',
    //   menu_id: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Garden Pizza',
    //   menu_id: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Supreme Meats Pizza',
    //   menu_id: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Fudge Brownies',
    //   menu_id: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Cinnamon Dippers',
    //   menu_id: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }, {
    //   name: 'Cookie Pizza',
    //   menu_id: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('items', null, {});
  }
};
