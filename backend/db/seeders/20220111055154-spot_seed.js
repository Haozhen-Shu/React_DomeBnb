'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Spots', 
        [
          {
            userId: 1,
            address: 'Joshua Tree National Park',
            city: 'Joshua Tree',
            state: 'California',
            country: 'United States',
            name: 'JTHAVN - Joshua Tree Remote Dessert Bubble Dome',
            price: 951,
          },
          {
            userId: 1,
            address: 'Joshua Tree',
            city: 'Ogden City',
            state: 'Huntsville',
            country: 'United States',
            name: 'Mini Dome Near Snowbasin',
            price: 168,
          },
          {
            userId: 1,
            address: 'Joshua Tree',
            city: 'Joshua Tree',
            state: 'California',
            country: 'United States',
            name: 'Moon Camp: An Off- Grid Joshua Tree Retreat',
            price: 409,
          },
          {
            userId: 2,
            address: ' Palm Springs',
            city: 'Palm Springs',
            state: 'California',
            country: 'United States',
            name: 'Private and Secluded Large House 3 Bdrm on 5 acres',
            price: 445,
          },
          {
            userId: 2,
            address: 'Yucca Valley',
            city: 'Yucca Valley',
            state: 'California',
            country: 'United States',
            name: 'Hawkeye Dome(New Cedar Hot Tub)',
            price: 395,
          },
          {
            userId: 2,
            address: 'Los alamitos',
            city: 'Los alamitos',
            state: 'Baja California',
            country: 'Mexico',
            name: 'Bubble Suite 10 Campera Hotel Burbuja',
            price: 215
          },
          {
            userId: 3,
            address: 'Landers',
            city: 'Landers',
            state: 'California',
            country: 'United States',
            name: 'Serenity Dome Oasis at Joshua Tree - AC / Pool / Hottub',
            price: 419,
          },
          {
            userId: 3,
            address: 'Los alamitos',
            city: 'Los alamitos',
            state: 'Baja California',
            country: 'Mexico',
            name: 'Bubble Room 5(BATHROOM OUTSIDE) Campera Hotel',
            price: 191
          },
          {
            userId: 3,
            address: 'Joshua Tree',
            city: 'Joshua Tree',
            state: 'California',
            country: 'United States',
            name: '* Zen Dome - Artist Peace Retreat *',
            price: 175
          },
          {
            userId: 3,
            address: 'Big Bear Lake',
            city: 'Big Bear Lake',
            state: 'California',
            country: 'United States',
            name: 'Snow Summit Dome Home - Great property walking distance to the slopes!!',
            price: 812,
          },
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Spots', null, {});
  }
};
