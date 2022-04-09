'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('songs', [
      { name: 'Back in the USSR', albumName: 'the White Album', songNum: 1 },
      { name: 'Dear Prudence', albumName: 'the White Album', songNum: 2 },
      { name: 'Glass Onion', albumName: 'the White Album', songNum: 3 },
      { name: 'Ob-La-Di Ob-La-Da', albumName: 'the White Album', songNum: 4 },
      { name: 'Wild Honey Pie', albumName: 'the White Album', songNum: 5 },
      { name: 'The Continuting Story of Bungalow Bill', albumName: 'the White Album', songNum: 6 },
      { name: 'While My Guitar Gently Weeps', albumName: 'the White Album', songNum: 7 },
      { name: 'Happiness Is a Warm Gun', albumName: 'the White Album', songNum: 8 },
      { name: 'My Dear Martha', albumName: 'the White Album', songNum: 9 },
      { name: 'Im So Tired', albumName: 'the White Album', songNum: 10 },
      { name: 'Blackbird', albumName: 'the White Album', songNum: 11 },
      { name: 'Piggies', albumName: 'the White Album', songNum: 12 },
      { name: 'Rocky Raccoon', albumName: 'the White Album', songNum: 13 },
      { name: 'Dont Pass Me By', albumName: 'the White Album', songNum: 14 },
      { name: 'Why Dont We Do It in the Road', albumName: 'the White Album', songNum: 15 },
      { name: 'I Will', albumName: 'the White Album', songNum: 16 },
      { name: 'Julia', albumName: 'the White Album', songNum: 17 },
      { name: 'Birthday', albumName: 'the White Album', songNum: 18 },
      { name: 'Yer Blues', albumName: 'the White Album', songNum: 19 },
      { name: 'Mother Natures Son', albumName: 'the White Album', songNum: 20 },
      { name: 'Everybodys Got Something to Hide Except Me and My Monkey', albumName: 'the White Album', songNum: 21 },
      { name: 'Sexy Sadie', albumName: 'the White Album', songNum: 22 },
      { name: 'Helter Skelter', albumName: 'the White Album', songNum: 23 },
      { name: 'Long, Long, Long', albumName: 'the White Album', songNum: 24 },
      { name: 'Revolution 1', albumName: 'the White Album', songNum: 25 },
      { name: 'Honey Pie', albumName: 'the White Album', songNum: 26 },
      { name: 'Savory Truffle', albumName: 'the White Album', songNum: 27 },
      { name: 'Cry Baby Cry', albumName: 'the White Album', songNum: 28 },
      { name: 'Revolution 9', albumName: 'the White Album', songNum: 29 },
      { name: 'Good Night', albumName: 'the White Album', songNum: 30 },
      { name: 'Two of Us', albumName: 'Let It Be', songNum: 1 },
      { name: 'Dig a Pony', albumName: 'Let It Be', songNum: 2 },
      { name: 'Across the Universe', albumName: 'Let It Be', songNum: 3 },
      { name: 'I Me Mine', albumName: 'Let It Be', songNum: 4 },
      { name: 'Dig It', albumName: 'Let It Be', songNum: 5 },
      { name: 'Let It Be', albumName: 'Let It Be', songNum: 6 },
      { name: 'Maggie Mae', albumName: 'Let It Be', songNum: 7 },
      { name: 'Ive Got a Feeling', albumName: 'Let It Be', songNum: 8 },
      { name: 'One After 909', albumName: 'Let It Be', songNum: 9 },
      { name: 'The Long and Winding Road', albumName: 'Let It Be', songNum: 10 },
      { name: 'For You Blue', albumName: 'Let It Be', songNum: 11 },
      { name: 'Get Back', albumName: 'Let It Be', songNum: 12 },
      { name: 'Come Together', albumName: 'Abbey Road', songNum: 1 },
      { name: 'Something', albumName: 'Abbey Road', songNum: 2 },
      { name: 'Maxwells Silver Hammer', albumName: 'Abbey Road', songNum: 3 },
      { name: 'Oh! Darling', albumName: 'Abbey Road', songNum: 4 },
      { name: 'Octopus Garden', albumName: 'Abbey Road', songNum: 5 },
      { name: 'I Want You (Shes So Heavy)', albumName: 'Abbey Road', songNum: 6 },
      { name: 'Here Comes the Sun', albumName: 'Abbey Road', songNum: 7 },
      { name: 'Because', albumName: 'Abbey Road', songNum: 8 },
      { name: 'You Never Give Me Your Money', albumName: 'Abbey Road', songNum: 9 },
      { name: 'Sun King', albumName: 'Abbey Road', songNum: 10 },
      { name: 'Mean Mr Mustard', albumName: 'Abbey Road', songNum: 11 },
      { name: 'Polythene Pam', albumName: 'Abbey Road', songNum: 12 },
      { name: 'She Come In Through the Bathroom Window', albumName: 'Abbey Road', songNum: 13 },
      { name: 'Golden Slumbers', albumName: 'Abbey Road', songNum: 14 },
      { name: 'Carry That Weight', albumName: 'Abbey Road', songNum: 15 },
      { name: 'The End', albumName: 'Abbey Road', songNum: 16 },
      { name: 'Her Majesty', albumName: 'Abbey Road', songNum: 17 },
      { name: 'Sgt Peppers Lonely Hearts Club Band', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 1 },
      { name: 'With a Little Help from My Friends', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 2 },
      { name: 'Lucy in the Sky with Diamonds', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 3 },
      { name: 'Getting Better', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 4 },
      { name: 'Fixing a Hole', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 5 },
      { name: 'Shes Leaving Home', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 6 },
      { name: 'Being for the Benefit of My Kite!', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 7 },
      { name: 'Within You Without You', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 8 },
      { name: 'When Im Sixty-Four', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 9 },
      { name: 'Lovely Rita', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 10 },
      { name: 'Good Morning Good Morning', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 11 },
      { name: 'Sgt Peppers Lonely Hearts Club Band(reprise)', album_name: 'Sgt Peppers Lonely Hearts Club Band', songNum: 12 },
      { name: 'A Day in the Life', albumName: 'Sgt Peppers Lonely Hearts Club Band', songNum: 13 },
      { name: 'The Magical Mystery Tour', albumName: 'The Magical Mystery Tour', songNum: 1 },
      { name: 'The Fool on the Hill', albumName: 'The Magical Mystery Tour', song_nsongNum: 3 },
      { name: 'Blue Jay Way', albumName: 'The Magical Mystery Tour', songNum: 4 },
      { name: 'Your Mother Should Know', albumName: 'The Magical Mystery Tour', songNum: 5 },
      { name: 'I Am The Walrus', albumName: 'The Magical Mystery Tour', songNum: 6 },
      { name: 'Hello, Goodbye', albumName: 'The Magical Mystery Tour', songNum: 7 },
      { name: 'Strawberry Fields Forever', albumName: 'The Magical Mystery Tour', songNum: 8 },
      { name: 'Penny Lane', album_name: 'The Magical Mystery Tour', songNum: 9 },
      { name: 'Baby Your a Rich Man', albumName: 'The Magical Mystery Tour', songNum: 10 },
      { name: 'All You Need is Love', albumName: 'The Magical Mystery Tour', songNum: 11 }

    ], {});

    
    
    
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

    await queryInterface.bulkDelete('songs', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
