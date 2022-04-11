'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tenants',
       [
        {
          firstName: 'John',
          lastName: 'Doe',
          phone: '3125551234',
          email: 'johnd@email.com',
          buildingCode: 'AUG',
          apartmentCode: 'GARDEN',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          phone: '7735551234',
          email: 'janed@email.com',
          buildingCode: 'AUG',
          apartmentCode: 'GARDEN',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Rick',
          lastName: 'James',
          phone: '3124567890',
          email: 'rickjamesb@email.com',
          buildingCode: 'AUG',
          apartmentCode: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Wayne',
          lastName: 'Brady',
          phone: '7739874567',
          email: 'wayneb@email.com',
          buildingCode: 'AUG',
          apartmentCode: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Charlie',
          lastName: 'Murphy',
          phone: '3125551234',
          email: 'charliem@email.com',
          buildingCode: 'AUG',
          apartmentCode: '3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Katie',
          lastName: 'Sins',
          phone: '7739804598',
          email: 'ksins@email.com',
          buildingCode: 'AUG',
          apartmentCode: '3',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
       {}
    )
    
  },

  down: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkDelete('tenants', null, {});
     
  }
};
