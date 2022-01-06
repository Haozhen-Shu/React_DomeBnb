'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'John@user.io',
        username: 'John',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'Harry@user.io',
        username: 'Harry',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'John', 'Harry'] }
    }, {});
  }
};