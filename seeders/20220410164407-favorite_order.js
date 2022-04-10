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
    await queryInterface.bulkInsert('favorite_orders', [{
      item_id: 5,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_id: 7,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_id: 8,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_id: 2,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_id: 4,
      user_id: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      item_id: 7,
      user_id: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
