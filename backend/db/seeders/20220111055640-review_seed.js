'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', 
        [
          {
            userId: 1,
            spotId: 4,
            review: 'This was an absolutely wonderful get away to have peace and quiet away from the city. It was tranquil, comfortable and super clean.'
          },
          {
            userId: 1,
            spotId: 5,
            review: 'This location and experience is amazing! I cannot emphasize how beautiful stargazing outside the dome was. For the price I was hoping for higher quality materials and slightly better stargazing inside.'
          },
          {
            userId: 1,
            spotId: 6,
            review: 'Great place for pictures and scenic views.',
          },
          {
            userId: 2,
            spotId: 1,
            review: 'Such a cool spot. They did a great job with this place. It’s so unique. 5 star glamping experience! Super clean and the set up was perfect.'
          },
          {
            userId: 2,
            spotId: 9,
            review: 'Absolutely beautiful! Staying here was a very romantic and unique experience.',
          },
          {
            userId: 2,
            spotId: 3,
            review: 'Karen’s house is very nice, the view is also very beautiful, the service is very attentive, highly recommended！！！',
          },
          {
            userId: 3,
            spotId: 1,
            review: 'The house and the view are very good, and the owner will reply promptly. Great experience!!!',
          },
          {
            userId: 3,
            spotId: 2,
            review: 'Literally a once in a lifetime experience! It was magical. :)',
          },
          {
            userId: 3,
            spotId: 3,
            review: 'Cool spot! Easy to find, about 10 to 15 minutes from grocery stores and restaurants. Bubble gets very hot, would definitely recommend going when it’s not super hot!',
          },
          {
            userId: 3,
            spotId: 4,
            review: 'This stay turned into a terrible experience for us.',
          },
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
