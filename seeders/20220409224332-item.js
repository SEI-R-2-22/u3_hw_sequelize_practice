'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.bulkInsert('items', [{
      name: 'Iron Branch',
      description: 'Targets the ground to plant a happy little tree that lasts for 20 seconds.',
      gold_cost: 50,
      mana_cost: 0,
      strength: 1,
      agility: 1,
      intelligence: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blades of Attack',
      description: 'The damage of these small, concealable blades should not be underestimated.',
      damage: '9',
      damage_type: 'physical',
      gold_cost: 450,
      mana_cost: 0,
      strength: 0,
      agility: 0,
      intelligence: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Force Staff',
      description: 'Allows you to manipulate others, for good or evil.',
      damage: 0,
      gold_cost: 2200,
      mana_cost: 100,
      strength: 0,
      agility: 0,
      intelligence:10 ,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
