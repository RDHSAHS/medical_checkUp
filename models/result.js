'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    
    static associate(models) {
      Result.belongsTo(models.User)
      Result.belongsTo(models.Laboratorium)
    }
  }
  Result.init({
    checkupDate: DataTypes.DATE,
    resultDate: DataTypes.DATE,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    bloodType: DataTypes.STRING,
    cholestrol: DataTypes.INTEGER,
    uricAcid: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    LaboratoriumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};