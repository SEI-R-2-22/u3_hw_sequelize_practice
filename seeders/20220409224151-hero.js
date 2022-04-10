'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('heros',[{   
      name: 'Abaddon',
      primary_attribute: 'strength',
      strength: 22,
      agility: 23,
      intelligence: 18,
      attack_min: 50,
      attack_max: 60,
      spell1: 'mist_coil',
      spell2: 'aphotic_shield',
      spell3: 'curse_of_avernus',
      spell4: 'borrowed_time',
      createdAt: new Date(),
      updatedAt: new Date()
    },{   
      name: 'Alchemist',
      primary_attribute: 'strength',
      strength: 25,
      agility: 22,
      intelligence: 25,
      attack_min: 52,
      attack_max: 58,
      spell1: 'acid_spray',
      spell2: 'unstable_concoction',
      spell3: 'greevils_greed',
      spell4: 'chemical_rage',
      createdAt: new Date(),
      updatedAt: new Date()
    },{   
      name: 'Ancient_Apparition',
      primary_attribute: 'intelligence',
      strength: 20,
      agility: 20,
      intelligence: 23,
      attack_min: 44,
      attack_max: 54,
      spell1: 'cold_feet',
      spell2: 'ice_vortex',
      spell3: 'chilling_touch',
      spell4: 'ice_blast',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],{});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
