'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Gary',
          lastName: 'McGaryson',
          email: 'garymcgary@gary.com',
          password: '12345',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bloopie',
          lastName: 'Boobert',
          email: 'blipblop@blorg.com',
          password: 'blorgaborkmor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Stu',
          lastName: 'Stevens',
          email: 'Stu@u.com',
          password: 'go4stu',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }

};

