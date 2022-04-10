const falso = require('@ngneat/falso')

const dogs = [...Array(10)].map((dog) => ({
  breed: falso.randDog(),
  firstName: falso.randFirstName(),
  walkFreq: falso.randFrequency({ length: 10 }),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dogs', dogs, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dogs', null, {})
  }
}
