'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('spells', [{
      name: 'mist_coil',
      damage: 110,
      damage_type: 'Magical',
      ability_type: 'Unit Target',
      mana_cost: 0,
      cooldown: 5,
      cast_range: 575,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'aphotic_sheild',
        damage: 110,
        damage_type: 'Magical',
        ability_type: 'Unit Target',
        mana_cost: 110,
        cooldown: 12,
        cast_range: 675,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'curse_of_avernus',
        damage_type: 'Magical',
        ability_type: 'Passive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'borrowed_time',
        damage: 110,
        damage_type: 'Magical',
        ability_type: 'No Target',
        cooldown: 60,
        cast_range: 1200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'acid_spray',
        damage: 20,
        damage_type: 'Physical',
        ability_type: 'Point Target',
        mana_cost: 130,
        cooldown: 22,
        cast_range: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'unstable_concoction',
        damage: 150,
        damage_type: 'Physical',
        ability_type: 'Point Target',
        mana_cost: 100,
        cooldown: 13,
        cast_range: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'greevils_greed',
        ability_type: 'Passive',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chemical_rage',
        ability_type: 'No Target',
        mana_cost: 50,
        cooldown: 55,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'cold_feet',
        damage: 30,
        damage_type: 'Magical',
        ability_type: 'Unit Target',
        mana_cost: 125,
        cooldown: 12,
        cast_range: 700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ice_vortex',
        damage: 40,
        damage_type: 'Magical',
        ability_type: 'Point Target',
        mana_cost: 40,
        cooldown: 7,
        cast_range: 1100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'chilling_touch',
        damage: 40,
        damage_type: 'Magical',
        ability_type: 'Unit Target',
        mana_cost: 30,
        cooldown: 12,
        cast_range: 600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ice_blast',
        damage: 250,
        damage_type: 'Magical',
        ability_type: 'Point Target',
        mana_cost: 175,
        cooldown: 60,
        cast_range: 50000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
