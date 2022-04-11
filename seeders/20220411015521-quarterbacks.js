const quarterbacks = [
  {
    firstName: 'Tom',
    lastName: 'Brady',
    throwAccuracy: '99',
    throwPower: '95',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    firstName: 'Patrick',
    lastName: 'Mahomes',
    throwAccuracy: '99',
    throwPower: '99',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('quarterbacks', quarterbacks, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('quarterbacks', null, {})
  }
}
