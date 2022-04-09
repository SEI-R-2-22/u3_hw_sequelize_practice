'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'gardens',
      [
        {
          gardenType: 'Herb Garden',
          dirtType: 'Fertilized',
          plantType: 'Weed',
          waterSchedule: 'Weekly',
          plantCount: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'plants',
      [
        {
          plantName: 'Dandilion',
          plantSeason: 'Spring',
          plantColor: 'Yellow',
          plantType: 'Weed',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      'seasons',
      [
        {
          season: 'Spring',
          weather: 'Light Rain',
          plantType: 'Weeds',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('gardens', null, {})
    await queryInterface.bulkDelete('plants', null, {})
    await queryInterface.bulkDelete('seasons', null, {})
  }
}
