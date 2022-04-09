'use strict'

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
    await queryInterface.bulkInsert(
      'tournaments',
      [
        {
          name: 'Masters',
          location: 'Augusta National',
          date: 'April 7, 2020',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'golfers',
      [
        {
          name: 'Mark Kennedy',
          age: 32,
          ranking: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )

    await queryInterface.bulkInsert(
      'golfballs',
      [
        {
          name: 'ProV 1',
          brand: 'Titleist',
          price: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tournaments', null, {})
    await queryInterface.bulkDelete('golfers', null, {})
    await queryInterface.bulkDelete('golfballs', null, {})
  }
}
