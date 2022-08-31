const express = require('express')

const router = express.Router()

router.get('/user', (req, res, next) => {
  res.send(
    '<h1>Below will be the list of the users<h1> <body><form action="/user-added" method="POST"><label for="fname">First name:</label><br> <input type="text" id="fname" name="fname"><br> <label for="lname">Last name:</label><br> <input type="text" id="lname" name="lname"> <br><button type="submit">Click Me!</button></br></form></body>'
  )
})

router.post('/user-added', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
