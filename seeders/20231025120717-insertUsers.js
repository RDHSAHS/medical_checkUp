'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))
    users.forEach(el => {
      delete el.id
      el.updatedAt = new Date()
      el.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Users',users, {})
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
};
