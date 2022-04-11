module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'ninis',
      [
        {
          name: 'Nneoma Anosike',
          agency: 'One Management',
          booked_jobs: 96831,
          model_list: 'Money Girls',
          campaigns: 85000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ninis', null, {})
  }
}
