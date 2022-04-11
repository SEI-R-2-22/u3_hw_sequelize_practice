'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'snacks',
      [
        {
          name: 'Lays Potato Chips',
          company_id: 'FritoLay',
          main_ingredient_id: 'Potato',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pringles',
          company_id: 'Kellogs',
          main_ingredient_id: 'Potato',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ruffles',
          company_id: 'FritoLay',
          main_ingredient_id: 'Potato',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Doritos',
          company_id: 'FritoLay',
          main_ingredient_id: 'Corn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cheetos',
          company_id: 'FritoLay',
          main_ingredient_id: 'Corn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fritos',
          company_id: 'FritoLay',
          main_ingredient_id: 'Corn',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Snickers',
          company_id: 'Mars',
          main_ingredient_id: 'Peanut',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Reeses',
          company_id: 'Hershey',
          main_ingredient_id: 'Peanut',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Oh Henry',
          company_id: 'Hershey',
          main_ingredient_id: 'Peanut',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'KitKat',
          company_id: 'Nestle',
          main_ingredient_id: 'Wafer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pirouline',
          company_id: 'DeBeukelaer',
          main_ingredient_id: 'Wafer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Timeout',
          company_id: 'Cadbury',
          main_ingredient_id: 'Wafer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('snacks', null, {})
  }
};
