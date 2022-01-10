'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          spotId: 1,
          Url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-49118131/original/277aed14-970b-4f1f-98b5-7cf41906d053.jpeg?im_w=960'
        },
        {
          SpotId: 2,
          Url: 'https://a0.muscache.com/im/pictures/9dedf561-2fb5-4e7f-8747-0943d2bfe243.jpg?im_w=960',
        },
        {
          SpotId: 3,
          Url: 'https://a0.muscache.com/im/pictures/988aec0d-e6be-476c-9a53-8c74d0ad0801.jpg?im_w=960',
        },
        {
          SpotId: 4,
          Url: 'https://a0.muscache.com/im/pictures/bf54f017-0edb-44f8-868c-7d077693a867.jpg?im_w=1200',
        },
        {
          SpotId: 5,
          Url: 'https://a0.muscache.com/im/pictures/miso/Hosting-28762302/original/75d01693-e267-41f7-b026-c8e37b184635.jpeg?im_w=960',
        },
        {
          SpotId: 6,
          Url: 'https://a0.muscache.com/im/pictures/8dfd68e5-5278-416b-9875-9f44522d288a.jpg?im_w=960',
        },
        {
          SpotId: 7,
          Url: 'https://a0.muscache.com/im/pictures/7201f009-fa4b-4a55-8df5-43ac5723d72b.jpg?im_w=960',
        },
        {
          SpotId: 8,
          Url: 'https://a0.muscache.com/im/pictures/484fe0b5-b375-4fa4-acd7-49ba96c3ceaa.jpg?im_w=960',
        },
        {
          SpotId: 9,
          Url: 'https://a0.muscache.com/im/pictures/miso/Hosting-9380768/original/0bf816b2-324b-475c-8f3a-82d882ad6c4b.jpeg?im_w=960',
        },
        {
          SpotId: 10,
          Url: 'https://a0.muscache.com/im/pictures/fa9dc16c-29c9-4593-b38e-9af1e59fcb9a.jpg?im_w=960',
        }




    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
