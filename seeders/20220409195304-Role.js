'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('roles', [
      {
        roleName: 'Healer', //1
        stat: 'Intelligence',
        type: 'Melee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'Healer', //2
        stat: 'Intelligence',
        type: 'Caster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'Tank', //3
        stat: 'Strength',
        type: 'Melee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'Tank', //4
        stat: 'Agility',
        type: 'Melee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'DPS', //5
        stat: 'Strength',
        type: 'Melee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'DPS', //6
        stat: 'Agility',
        type: 'Melee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'DPS', //7
        stat: 'Agility',
        type: 'Ranged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'DPS', //8
        stat: 'Intelligence',
        type: 'Ranged',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tiers', null, {});
  }
};
