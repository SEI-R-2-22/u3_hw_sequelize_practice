'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'hunts',
      [
        {
          type: 'Elk Hunt',
          location: 'SteamBoat Colorado',
          species: 'Bull and Cow Elk',
          success: 'No success to many hunters',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hunts', null, {})
  }
}
