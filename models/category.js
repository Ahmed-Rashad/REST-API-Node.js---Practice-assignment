const mongoose = require('mongoose')

const { Schema } = mongoose

const category = new Schema({

    name: { type: String }
})

module.exports = mongoose.model('category ', category)