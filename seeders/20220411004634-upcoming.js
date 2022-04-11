'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
    'upcomings',
    [
      {
        title: "God of War Ragnarök",
        studio: "Santa Monica Studios",
        releaseDate: "2022",
        publisher: "Sony Interactive Entertainment",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "N/A",
        studio: "Sucker Punch Productions",
        releaseDate: "N/A",
        publisher: "N/A",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
  },
  
      down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('upcomings', null, {})
  }
};

