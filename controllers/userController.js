const { Op } = require('sequelize')
const { User } = require('../models')
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
      let user = User.findOne({ where: { username } })
      if (user) {
        const isValidPassword = bcryptjs.compareSync(password, user.password);

        if (isValidPassword) {
          req.session.userId = user.id;
          req.session.role = user.role;
          return res.redirect('/');
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

}

module.exports = UserController