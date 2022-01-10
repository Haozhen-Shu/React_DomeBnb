'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      {
        userId: 1,
        Address: 'Joshua Tree National Park',   
        City: 'Joshua Tree',
        State: 'California',
        Country: 'United States',
        Name: 'JTHAVN - Joshua Tree Remote Dessert Bubble Dome',
        Price: '$951/night'
      },
      {
        userId: 1,
        Address:'Joshua Tree',
        City: 'Ogden City',
        State: 'Huntsville',
        Country: 'United States',
        Name: 'Mini Dome Near Snowbasin',
        Price: '$168/night'
      },
      {
        UserId: 1,
        Address: 'Joshua Tree',
        City: 'Joshua Tree',
        State: 'California',
        Country: 'United States',
        Name: 'Moon Camp: An Off- Grid Joshua Tree Retreat',
        Price: '$409/night'
      },
      {
        UserId: 2,
        Address:' Palm Springs',
        City: 'Palm Springs',
        State: 'California',
        Country: 'United States',
        Name: 'Private and Secluded Large House 3 Bdrm on 5 acres',
        Price: '$445/night'
      },
      {
        UserId: 2,
        Address:'Yucca Valley',
        City: 'Yucca Valley',
        State: 'California',
        Country: 'United States',
        Name: 'Hawkeye Dome(New Cedar Hot Tub)',
        Price: '$395/night',
      },
      {
        UserId: 2,
        Address:'Los alamitos',
        City: 'Los alamitos',
        State: 'Baja California',
        Country: 'Mexico',
        Name: 'Bubble Suite 10 Campera Hotel Burbuja',
        Price: '$215/night',
      },
      {
        UserId: 3,
        Address:'Landers',
        City: 'Landers',
        State: 'California',
        Country: 'United States',
        Name: 'Serenity Dome Oasis at Joshua Tree - AC / Pool / Hottub',
        Price: '$419/night',
      },
      {
        UserId: 3,
        Address:'Los alamitos',
        City: 'Los alamitos',
        State: 'Baja California',
        Country: 'Mexico',
        Name: 'Bubble Room 5(BATHROOM OUTSIDE) Campera Hotel',
        Price: '$191/night',
      },
      {
        UserId: 3,
        Address:'Joshua Tree',
        City: 'Joshua Tree',
        State: 'California',
        Country: 'United States',
        Name: '* Zen Dome - Artist Peace Retreat *',
        Price: '$175/night',
      },
      {
        UserId: 3,
        Address:'Big Bear Lake',
        City: 'Big Bear Lake',
        State: 'California',
        Country: 'United States',
        Name: 'Snow Summit Dome Home - Great property walking distance to the slopes!!',
        Price: '$812/night',
      },

  
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
