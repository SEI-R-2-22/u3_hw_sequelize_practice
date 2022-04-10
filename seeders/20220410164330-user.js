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
    await queryInterface.bulkInsert('users', [{
      first_name: 'Pasquale',
      last_name: 'Giammarco',
      password: 'iLoveMarcosPizza',
      favorite_order_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'John',
      last_name: 'Schnatter',
      password: 'iLovePapaJohns',
      favorite_order_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Tom',
      last_name: 'Monaghan',
      password: 'iLoveDominos',
      favorite_order_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Marian',
      last_name: 'Illitch',
      password: 'iLoveLittleCaesars',
      favorite_order_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Mike',
      last_name: 'Illitch',
      password: 'iLoveMyWife',
      favorite_order_id: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'Dan',
      last_name: 'Carney',
      password: 'iLovePizzaHut',
      favorite_order_id: 0,
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
