const { City } = require('./models')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/cities', async (req, res) => {
  const cities = await City.find()
  res.json(cities)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
