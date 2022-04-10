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
       'coaches', [
          {
            firstname: 'Tim',
            lastname: 'Ellis',
            pronoun: 'he/him',
            email: 'timsemail@esh.com',
            address: '123 My Address, Boston MA',
            profileimg_url: 'www.imgur.com/demo.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            firstname: 'Karen',
            lastname: 'Sokolow',
            pronoun: 'any',
            email: 'ksok@esh.com',
            address: '123 My Address, Boston MA',
            profileimg_url: 'www.imgur.com/demo.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            firstname: 'T',
            lastname: 'Lawrence-Simon',
            pronoun: 'he/him',
            email: 'ttheamazing@esh.com',
            address: '456 Penn Ave, Somverville, MA',
            profileimg_url: 'www.imgur.com/demo.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            firstname: 'Roger',
            lastname: 'May',
            pronoun: 'he/him',
            email: 'roger@esh.com',
            address: '1357 Mass Ave, Cambridge, MA',
            profileimg_url: 'www.imgur.com/demo.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            firstname: 'Ellen',
            lastname: 'Waylonis',
            pronoun: 'she/her',
            email: 'ellen@esh.com',
            address: '1357 Mass Ave, Cambridge, MA',
            profileimg_url: 'www.imgur.com/demo.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ], {});

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    return queryInterface.bulkDelete('coaches', null, {});
  }
};
