'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'songs',
      [
        {
          name: 'The Bygone Days',
          singer: 'instrumental',
          movie: 'Porco Rosso',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'A Town With an Ocean View',
          singer: 'instrumental',
          movie: `Kiki's Delivery Service`,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Destruction of Laputa',
          singer: 'instrumental',
          movie: 'Castle in the Sky',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('songs', null, {})
  }
};
