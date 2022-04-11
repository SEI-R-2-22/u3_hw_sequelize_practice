"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "employees",
      [
        {
          firstName: "John",
          lastName: "Connor",
          email: "me@future.shock",
          password: "$hastalavista",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("employees", null, {});
  },
};
