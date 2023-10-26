'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
    cholesterol: DataTypes.INTEGER,
    uricAcid: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    LaboratoriumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};