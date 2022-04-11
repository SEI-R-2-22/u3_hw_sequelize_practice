const runningbacks = [
  {
    firstName: 'Jonathan',
    lastName: 'Taylor',
    speed: '99',
    jukeMove: '99',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Derrick',
    lastName: 'Henry',
    speed: '99',
    jukeMove: '95',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('runningbacks', runningbacks, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('runningbacks', null, {})
  }
}
