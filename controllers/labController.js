const { Op } = require('sequelize')
const { Laboratorium } = require('../models')

class LabController {
  static async bookTestDate(req, res) {
    try {
      res.render('bookTest')
    } catch (error) {
      console.error(error)
      res.send(error)
    }
  }

  static async bookTest(req, res) {
    try {
      const { checkUpDate } = req.body
      let laboratoriums = await Laboratorium.findAll({
        where: {
          currentPatients: {
            [Op.lt]: Sequelize.col('maxPatients')
          }
        }
      })
      res.redirect('/user')
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

}

module.exports = LabController