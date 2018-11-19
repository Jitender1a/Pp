const express = require('express')
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()

const controller=require('./controllers')

const app = express()

const { CONNECTION_STRING, SERVER_PORT: PORT, SESSION_SECRET } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected!')
  })

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}))

// controllers
app.post('/api/appointment', controller.create)
app.get('/api/appointment', controller.read)
app.put('/api/appointment/:id', controller.update)
app.delete('/api/appointment/:id', controller.delete)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
  })
