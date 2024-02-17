'use strict';
const mock = require('../../mock/eventMock');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('event', 
    mock.events, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('evet', null, {});
    
  }
};
