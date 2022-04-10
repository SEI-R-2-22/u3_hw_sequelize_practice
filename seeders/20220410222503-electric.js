'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'electrics',
      [
        {
          name: 'Siemens ACS-64',
          year: '2012',
          builder: 'Siemens Mobility'
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('electrics', null, {})
  }
};
