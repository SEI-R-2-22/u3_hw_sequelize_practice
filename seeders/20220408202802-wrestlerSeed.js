'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'wrestlers',
      [
        {
          firstName: 'Bryan',
          lastName: 'Ayala',
          grade: 11,
          weightClass: 120,
          isVarsity: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wrestlers', null, {})
  }
}
