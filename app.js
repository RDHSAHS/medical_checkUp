const express = require('express')
const router = require('./routers')
const session = require('express-session')
const userController = require('./controller/userController')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('Public'))

app.use(session({
  secret: 'rahasiahehehe',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    sameSite: true
   }
}))

app.use(router)

app.get('/userprofile', userController.userProfile)
app.get('/lablist', userController.lablist)
app.get('/labResultForm', userController.addNewResult)
app.post('/labResultForm', userController.addNewResult)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})