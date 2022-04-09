'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('band', [
      {
        name: 'John Lennon',
        title: 'Guitar'
      },
      {
        name: 'Paul McCartney',
        title: 'Bass Guitar'
      },
      {
        name: 'George Harrison',
        title: 'Guitar'
      },
      {
        name: 'Ringo Star',
        title: 'Drums'
      },
      {
        name: 'Pete Best',
        title: 'Drums'
      },
      {
        name: 'Stuart Sutcliffe',
        title: 'Bass Guitar'
      },
      {
        name: 'Norman Chapman',
        title: 'Drums'
      },
      {
        name: 'Tommy Moore',
        title: 'Drums'
      },
      {
        name: 'Chas Newby',
        title: 'Bass Guitar'
      },
      {
        name: 'Jimmie Nicol',
        title: 'Drums'
      }
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('band', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
