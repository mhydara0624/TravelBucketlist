const { City } = require('./models')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
