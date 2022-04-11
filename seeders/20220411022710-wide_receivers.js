const wide_receivers = [
  {
    firstName: 'Justin',
    lastName: 'Jefferson',
    routeRunning: '99',
    hands: '99',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Cooper',
    lastName: 'Kupp',
    routeRunning: '99',
    hands: '99',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('wide_receivers', wide_receivers, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('wide_receivers', null, {})
  }
}
