'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorium extends Model {
    
    static associate(models) {
      Laboratorium.hasMany(models.Result)
    }
  }
  Laboratorium.init({
    laboratoryName: DataTypes.STRING,
    location: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Laboratorium',
  });
  return Laboratorium;
};