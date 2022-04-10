const falso = require('@ngneat/falso')

const walkers = [...Array(10)].map((walker) => ({
  fullName: falso.randFullName(),
  avatar: falso.randAvatar(),
  email: falso.randEmail(),
  fullAddress: falso.randFullAddress(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('walkers', walkers, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('walkers', null, {})
  }
}
