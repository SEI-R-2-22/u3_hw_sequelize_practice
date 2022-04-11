"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "car",
      [
        {
          make: "Toyota",
          model: "Camry",
          color: "Concrete",
          year: 2018,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          make: "Toyota",
          model: "Supra",
          color: "Blue",
          year: 2016,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          make: "Honda",
          model: "Accord",
          color: "White",
          year: 2020,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          make: "Honda",
          model: "Civic",
          color: "Black",
          year: 2021,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          make: "Nissan",
          model: "GTR",
          color: "Matte Black",
          year: 2022,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("car", null, {});
  },
};
