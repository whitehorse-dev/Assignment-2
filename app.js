const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const userRouter = require('./routes/user')
const defaultRouter = require('./routes/default')

app.use(userRouter)
app.use(defaultRouter)

app.listen(3000)
