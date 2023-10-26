'use strict';
const fs = require('fs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const profiles = JSON.parse(fs.readFileSync('profileuser.json', 'utf-8'))
    profiles.forEach(el => {
      delete el.id
      el.updatedAt = new Date()
      el.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Profiles', profiles, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Profiles', null, {})
  }
};