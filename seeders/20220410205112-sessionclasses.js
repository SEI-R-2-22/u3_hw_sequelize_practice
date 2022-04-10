'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert(
     'session_classes', [
       {
        name: 'Juggling 101',
        description: 'Learn to juggle!',
        day: 'Tuesday',
        start_time: '20:35:00',
        length: 70,
        youth: false,
        price: 25,
        coach_pay_type: 'Lead',
        coach_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Partner Acrobatics 301',
        description: 'Work on intermediate-level partner acrobatic skills including counterbalances, hand-to-foot, and flyer tossing!',
        day: 'Tuesday',
        start_time: '19:10:00',
        length: 70,
        youth: false,
        price: 25,
        coach_pay_type: 'Co-Coach',
        coach_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Partner Acrobatics 101',
        description: 'Learn the basics of partner acrobatics and climb on other humans!',
        day: 'Tuesday',
        start_time: '20:35:00',
        length: 70,
        youth: false,
        price: 25,
        coach_pay_type: 'Co-Coach',
        coach_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Youth Circus Adventure',
        description: 'Kids learn circus!',
        day: 'Saturday',
        start_time: '12:30:00',
        length: 60,
        youth: true,
        price: 20,
        coach_pay_type: 'Lead',
        coach_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Aerial Hoop 201',
        description: 'Continue to work on core strength and technique for aerial hoop.',
        day: 'Monday',
        start_time: '18:50:00',
        length: 70,
        youth: false,
        price: 25,
        coach_pay_type: 'Lead',
        coach_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
       },
     ]
   )
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    return queryInterface.bulkDelete('session_classes', null, {});
  }
};
