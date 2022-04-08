'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'episodes',
      [
        {
          title:
            'E1 - To You, 2,000 Years in the Future -The Fall of Zhiganshina',
          description:
            'After 100 years, peace is broken by the appearance of a fifty meter tall Titan.',
          minutes: '24',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {})
  }
}
