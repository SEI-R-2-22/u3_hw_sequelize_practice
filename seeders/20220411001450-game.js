'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
    'games',
    [
      {
        title: "God of War",
        studio: "Santa Monica Studios",
        releaseDate: "04/20/2018",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Infamous",
        studio: "Sucker Punch Productions",
        releaseDate: "05/26/2009",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
  },
  
      down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('games', null, {})
  }
};
