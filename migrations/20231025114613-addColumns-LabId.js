'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Results','LaboratoriumId',{
      type:Sequelize.INTEGER,
      references:{
        model: 'Laboratoriums',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Results','LaboratoriumId',{});
  }
};
