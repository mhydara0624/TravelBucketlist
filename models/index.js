const mongoose = require('mongoose')
const CitySchema = require('./city')

const City = mongoose.model('cities', CitySchema)

module.exports = { City }
