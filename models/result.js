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
      // define association here
    }
  }
  Result.init({
    checkUpDate: DataTypes.DATE,
    resultDate: DataTypes.DATE,
    bloodType: DataTypes.STRING,
    cholestrol: DataTypes.INTEGER,
    uricAcid: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    bloodGlucose: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};