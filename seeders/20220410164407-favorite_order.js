'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorite_orders', [{
      //   item_id: 5,
      //   user_id: 6,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   item_id: 10,
      //   user_id: 6,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   item_id: 4,
      //   user_id: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   item_id: 7,
      //   user_id: 4,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   item_id: 3,
      //   user_id: 5,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // }, {
      //   item_id: 8,
      //   user_id: 1,
      //   createdAt: new Date(),
      //   updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorite_orders', null, {})
  }
};
