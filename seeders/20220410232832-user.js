const falso = require('@ngneat/falso')

const users = [...Array(10)].map((user) => ({
  fullName: falso.randFullName(),
  email: falso.randEmail(),
  userName: falso.randUserName(),
  password: falso.randPassword({ length: 6 }),
  fullAddress: falso.randFullAddress(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
