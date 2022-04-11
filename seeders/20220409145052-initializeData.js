'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
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
      firstName: 'Nghiem',
      lastName: 'Truong',
      email: 'vinhnghiemcr@gmail.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {})

      await queryInterface.bulkInsert('trucks', [{
        name: 'San Antonio',
        openHour: '10AM-5PM',
        location: 'North',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        }], {})

        await queryInterface.bulkInsert('reviews', [{
          name: 'Nick',
          rating: 5,
          comment: 'Greate foods',
          createdAt: new Date(),
          updatedAt: new Date()
          }], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('users', null, {})
     await queryInterface.bulkDelete('trucks', null, {})
     await queryInterface.bulkDelete('reviews', null, {})
  }
};
