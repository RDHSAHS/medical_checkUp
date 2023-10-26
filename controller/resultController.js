const {User, Laboratorium, Profile, Result} = require('../models/index')

class resultController{
    static async showResult(req,res){
        try {
            res.render('showResult')
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = resultController