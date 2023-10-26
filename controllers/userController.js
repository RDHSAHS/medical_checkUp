const { Op } = require('sequelize')
const { User, Laboratorium, Result, Profile } = require('../models')
const bcryptjs = require('bcryptjs')

class UserController {
  static async registerForm(req, res) {
    try {
      res.render('register')
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

  static async register(req, res) {
    try {
      const { username, password, role } = req.body
      await User.create({ username, password, role })
      res.redirect('/user/login')
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

  static async loginForm(req, res) {
    try {
      const { error } = req.query
      res.render('login', { error })
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body
      let user = await User.findOne({
        include: [Profile],
        where: { username }
      })

      if (user) {
        const isValidPassword = bcryptjs.compareSync(password, user.password);

        if (isValidPassword) {
          req.session.userId = user.id;
          req.session.role = user.role;
          let add = (!user.Profile) ? `addprofile` : ``
          return res.redirect(`/user/${user.id}/userprofile/${add}`);
        } else {
          const error = 'INVALID PASSWORD';
          return res.redirect(`/user/login?error=${error}`);
        }
      } else {
        const error = 'INVALID USERNAME';
        return res.redirect(`/user/login?error=${error}`);
      }

    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

  static async logout(req, res) {
    try {
      await req.session.destroy();
      res.redirect('/user/login');
    } catch (err) {
      res.send(err.message);
    }
  }

  static async showHome(req, res) { //login or sign up, admin or user
    try {
      res.render('home')
    } catch (error) {
      res.send(error)
    }
  }

  static async userProfile(req, res) {
    const { userId } = req.params
    try {
      const userprofile = await User.findOne({
        include: [
          {
            model: Result
          },
          {
            model: Profile
          }
        ],
        where: {
          id: userId
        }
      })
      res.render('loggedUser', { userprofile })
    } catch (error) {
      console.log(error);
      res.send(error)
    }
  }

  static async lablist(req, res) {//for booking, shows list of lab
    try {
      const lab = await Laboratorium.findAll()
      res.render('listoflab', { lab })
      console.log(lab);
    } catch (error) {
      res.send(error)
    }
  }

  static async addNewResult(req, res) {//for admin to add result in
    try {
      res.render('insertResultForm')
    } catch (error) {
      res.send(error)
    }
  }

  static async addProfileForm(req, res) {
    const { userId } = req.params
    try {
      res.render('addProfile', { userId })
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

  static async addProfile(req, res) {
    const { userId } = req.params
    const { firstName, lastName, birthday } = req.body
    const UserId = userId
    try {
      await Profile.create({ firstName, lastName, birthday, UserId})
      res.redirect(`/user/${userId}/userprofile`)
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

}

module.exports = UserController