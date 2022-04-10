'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Songs', [
      { name: 'Back in the USSR',  songNum: 1 },
      { name: 'Dear Prudence',  songNum: 2 },
      { name: 'Glass Onion',  songNum: 3 },
      { name: 'Ob-La-Di Ob-La-Da',  songNum: 4 },
      { name: 'Wild Honey Pie',  songNum: 5 },
      { name: 'The Continuting Story of Bungalow Bill',songNum: 6 },
      { name: 'While My Guitar Gently Weeps', songNum: 7 },
      { name: 'Happiness Is a Warm Gun', songNum: 8 },
      { name: 'My Dear Martha', songNum: 9 },
      { name: 'Im So Tired', songNum: 10 },
      { name: 'Blackbird', songNum: 11 },
      { name: 'Piggies', songNum: 12 },
      { name: 'Rocky Raccoon', songNum: 13 },
      { name: 'Dont Pass Me By', songNum: 14 },
      { name: 'Why Dont We Do It in the Road',  songNum: 15 },
      { name: 'I Will',  songNum: 16 },
      { name: 'Julia',  songNum: 17 },
      { name: 'Birthday',  songNum: 18 },
      { name: 'Yer Blues',  songNum: 19 },
      { name: 'Mother Natures Son',  songNum: 20 },
      { name: 'Everybodys Got Something to Hide Except Me and My Monkey', songNum: 21 },
      { name: 'Sexy Sadie',  songNum: 22 },
      { name: 'Helter Skelter',  songNum: 23 },
      { name: 'Long, Long, Long',  songNum: 24 },
      { name: 'Revolution 1',  songNum: 25 },
      { name: 'Honey Pie',  songNum: 26 },
      { name: 'Savory Truffle',  songNum: 27 },
      { name: 'Cry Baby Cry',  songNum: 28 },
      { name: 'Revolution 9',  songNum: 29 },
      { name: 'Good Night',  songNum: 30 },
      { name: 'Two of Us', songNum: 1 },
      { name: 'Dig a Pony', songNum: 2 },
      { name: 'Across the Universe', songNum: 3 },
      { name: 'I Me Mine', albumName: 'Let It Be', songNum: 4 },
      { name: 'Dig It', songNum: 5 },
      { name: 'Let It Be', songNum: 6 },
      { name: 'Maggie Mae', songNum: 7 },
      { name: 'Ive Got a Feeling', songNum: 8 },
      { name: 'One After 909', songNum: 9 },
      { name: 'The Long and Winding Road', songNum: 10 },
      { name: 'For You Blue', songNum: 11 },
      { name: 'Get Back', songNum: 12 },
      { name: 'Come Together', songNum: 1 },
      { name: 'Something', songNum: 2 },
      { name: 'Maxwells Silver Hammer', songNum: 3 },
      { name: 'Oh! Darling', songNum: 4 },
      { name: 'Octopus Garden', songNum: 5 },
      { name: 'I Want You (Shes So Heavy)', songNum: 6 },
      { name: 'Here Comes the Sun', songNum: 7 },
      { name: 'Because', songNum: 8 },
      { name: 'You Never Give Me Your Money', songNum: 9 },
      { name: 'Sun King', songNum: 10 },
      { name: 'Mean Mr Mustard', songNum: 11 },
      { name: 'Polythene Pam', songNum: 12 },
      { name: 'She Come In Through the Bathroom Window', songNum: 13 },
      { name: 'Golden Slumbers', songNum: 14 },
      { name: 'Carry That Weight', songNum: 15 },
      { name: 'The End', songNum: 16 },
      { name: 'Her Majesty', songNum: 17 },
      { name: 'Sgt Peppers Lonely Hearts Club Band', songNum: 1 },
      { name: 'With a Little Help from My Friends', songNum: 2 },
      { name: 'Lucy in the Sky with Diamonds', songNum: 3 },
      { name: 'Getting Better', songNum: 4 },
      { name: 'Fixing a Hole', songNum: 5 },
      { name: 'Shes Leaving Home', songNum: 6 },
      { name: 'Being for the Benefit of My Kite!', songNum: 7 },
      { name: 'Within You Without You', songNum: 8 },
      { name: 'When Im Sixty-Four', songNum: 9 },
      { name: 'Lovely Rita', songNum: 10 },
      { name: 'Good Morning Good Morning', songNum: 11 },
      { name: 'Sgt Peppers Lonely Hearts Club Band(reprise)', songNum: 12 },
      { name: 'A Day in the Life', songNum: 13 },
      { name: 'The Magical Mystery Tour', songNum: 1 },
      { name: 'The Fool on the Hill', songNum: 3 },
      { name: 'Blue Jay Way', songNum: 4 },
      { name: 'Your Mother Should Know', songNum: 5 },
      { name: 'I Am The Walrus', songNum: 6 },
      { name: 'Hello, Goodbye', songNum: 7 },
      { name: 'Strawberry Fields Forever', songNum: 8 },
      { name: 'Penny Lane', songNum: 9 },
      { name: 'Baby Your a Rich Man', songNum: 10 },
      { name: 'All You Need is Love', songNum: 11 }

    ]);

    
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Songs', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
