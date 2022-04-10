'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 
      'diesel_electrics',
      [
        {
          name: 'EMD DDA40X',
          year: '1969',
          builder: 'General Motors Electro-Motive Division'
        }
      ]
    )
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
