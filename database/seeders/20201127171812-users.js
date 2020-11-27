'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Fandi',
        lastName : 'Adhitya',
        email : 'fandiadhitya96@gmail.com',
        password : bcrypt.hashSync('secret',10),
        gender : 'male',
      },
      {
        firstName: 'Sam',
        lastName : 'Smith',
        email : 'samsmith@gmail.com',
        password : bcrypt.hashSync('secret',10),
        gender : 'male',
      },
    ]);
  },
  
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});

  }
};
