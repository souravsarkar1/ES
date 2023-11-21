let mongoose = require('mongoose')
require("dotenv").config()

let Connected = mongoose.connect(process.env.mongooseURL)

module.exports = {Connected}
