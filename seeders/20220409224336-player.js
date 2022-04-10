'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('players', [{
     
    name: 'fluff',
    hero_id: 1,
    item1_id: 1,
    item2_id: 1,
    item3_id: 1,
    item4_id: 1,
    gold: 0,
    health: 2000,
    mana:800,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
     
    name: 'Black Hat',
    hero_id: 2,
    item1_id: 1,
    item2_id: 1,
    item3_id:1 ,
    item4_id:1 ,
    item5_id:2 ,
    gold: 0,
    health: 1900,
    mana: 900,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
     
    name: 'White Hat',
    hero_id: 3,
    item1_id: 1,
    item2_id: 1,
    item3_id: 1,
    item4_id: 1,
    item5_id: 1,
    item6_id: 1,
    gold: 300,
    health: 1100,
    mana: 400,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
     
    name: 'StrongFruit',
    hero_id: 4,
    item1_id: 1,
    item2_id: 1,
    item3_id: 1,
    item4_id: 1,
    item5_id: 1,
    item6_id: 1,
    gold: 300,
    health: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
     
    name: 'SmartBlanket',
    hero_id: 5,
    item1_id: 2,
    item2_id: 2,
    item3_id: 2,
    item4_id: 2,
    gold: 600,
    health: 1600,
    mana: 1000,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
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
