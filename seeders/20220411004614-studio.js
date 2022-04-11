'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
    'studios',
    [
      {
        affiliation: "Santa Monica Studios - Playstation Studios",
        founded: "1999",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        affiliation: "Sucker Punch Productions - Playstation Studios, Sony Interactive Entertainment",
        founded: "1997",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {}
    )
  },
  
      down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('studios', null, {})
  }
};
