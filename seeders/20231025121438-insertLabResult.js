'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const labresults = JSON.parse(fs.readFileSync('labresult.json', 'utf-8'))
    labresults.forEach(el => {
      delete el.id
      el.updatedAt = new Date()
      el.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Results',labresults, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Results', null, {})
  }
};
