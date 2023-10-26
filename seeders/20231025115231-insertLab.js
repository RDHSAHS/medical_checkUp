'use strict';
const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const lab = JSON.parse(fs.readFileSync('lab.json', 'utf-8'))
    lab.forEach(el => {
      delete el.id
      el.updatedAt = new Date()
      el.createdAt = new Date()
    })
    await queryInterface.bulkInsert('Laboratoria', lab, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laboratoria', null, {})
  }
};
