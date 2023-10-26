const {User, Laboratorium, Profile, Result} = require('../models/index')

class userController{


    static async showHome(req,res){ //login or sign up, admin or user
        try {
            res.render('home')
        } catch (error) {
            res.send(error)
        }
    }


    static async userProfile(req,res){//if success login, show userProfile// access lab result
        try {
            const userprofile = await User.findOne({
                include: {
                    model: Profile
                },
                where:{
                    id:2
                }
            })
            res.render('loggedUser', {userprofile})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }

    static async lablist(req,res){//for booking, shows list of lab
        try {
            const lab = await Laboratorium.findAll()
            res.render('listoflab', {lab})
            console.log(lab);
        } catch (error) {
            res.send(error)
        }
    }

    static async addNewResult(req,res){//for admin to add result in
        try {
            res.render('insertResultForm')
        } catch (error) {
            res.send(error)
        }
    }

    


    
}

module.exports = userController