const { Op, Sequelize } = require('sequelize')
const { Laboratorium } = require('../models')

class LabController {
  static async bookTestDate(req, res) {
    try {
      let laboratoriums = []
      let checkUpDate = ''
      
      res.render('bookTest', {laboratoriums, checkUpDate})
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
      res.render('bookTest', { laboratoriums, checkUpDate })
    } catch (error) {
      console.error(error);
      res.send(error)
    }
  }

}

module.exports = LabController