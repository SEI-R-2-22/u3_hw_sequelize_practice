'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        firstName: 'Cole',
        lastName: 'Werhle',
        games: ['Root', 'Vast', 'Fort'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Thomas',
        lastName: 'Lehmann',
        games: ['Res Arcana'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jamey',
        lastName: 'Stegemair',
        games: ['Viticulture', 'Scythe', 'Wingspan'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Marc',
        lastName: 'Andre',
        games: ['Splendor'],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
