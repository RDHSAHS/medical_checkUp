'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    static associate(models) {
      Profile.belongsTo(models.User)
    }

    get age(){
      return (new Date().getFullYear())-(new Date(this.birthday).getFullYear())
    }

    get getTitle(){
      let title = (this.gender == 'Male')?'Mr':'Ms'
      return `${title} ${this.firstName} ${this.lastName}`

    }

  }
  Profile.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });


  return Profile;
};