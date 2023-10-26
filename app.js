
const express = require('express')
const app = express()
const port = 3000
const userController = require('./controller/userController')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))


app.get('/home', userController.showHome)
// app.get('/signin', userController.showHome)
// app.get('/signup', userController.showHome)
// app.get('/signinAdmin', userController.showHome)
app.get('/userprofile', userController.userProfile)
app.get('/lablist', userController.lablist)

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})