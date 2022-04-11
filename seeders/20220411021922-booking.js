'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'bookings',
      [
        {
          orderNumber: 123,
          userId: 1,
          propertyId: 101,
          price: 1600,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderNumber: 124,
          userId: 2,
          propertyId: 111,
          price: 400,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderNumber: 125,
          userId: 3,
          propertyId: 222,
          price: 800,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          orderNumber: 126,
          userId: 4,
          propertyId: 333,
          price: 1200,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
  return queryInterface.bulkDelete('bookings', null, {})
  }
};
