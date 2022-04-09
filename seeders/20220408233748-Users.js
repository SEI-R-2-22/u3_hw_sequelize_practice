'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'user',
      [
      
        {userName: "lola", password: "564796", region: "South America", gender: "Female",createdAt: new Date(),
        updatedAt: new Date()},
      {userName: "imcool", password: "564794", region: "North America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "bigfoot", password: "564790", region: "South America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "Donchente", password: "56433796", region: "North America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "princesslala", password: "56432796", region: "South America", gender: "Female",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "ella", password: "5ew4796", region: "North America", gender: "Female",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "Argo", password: "2344796", region: "South America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "MArcosauce", password: "ee4796", region: "North America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "lola", password: "534796", region: "South America", gender: "Female",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "Willsmith", password: "ee4796", region: "North America", gender: "Male",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "JaneSmith", password: "56eeff6", region: "South America", gender: "Female",createdAt: new Date(),
      updatedAt: new Date()},
      {userName: "Kanyesauce", password: "5kim796", region: "North America", gender: "Female",createdAt: new Date(),
      updatedAt: new Date()}
      ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {})
  }
};
