'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasOne(models.Profile)
      User.hasMany(models.Result)
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, options) {
        let hash = bcrypt.hashSync(instance.password, 8)
        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};