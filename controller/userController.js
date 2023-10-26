const {User, Laboratorium, Profile, Result} = require('../models/index')

class userController{
    static async showHome(req,res){
        try {
            res.render('home')
        } catch (error) {
            res.send(error)
        }
    }


    static async userProfile(req,res){
        try {
            res.render('loggedUser')
        } catch (error) {
            console.log(error);
        }
    }

    static async lablist(req,res){
        try {
            const lab = await Laboratorium.findAll()
            res.render('listoflab', {lab})
            console.log(lab);
        } catch (error) {
            console.log(error);
        }
    }

    
}

module.exports = userController