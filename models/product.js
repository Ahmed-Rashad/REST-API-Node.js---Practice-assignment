const mongoose = require('mongoose')

const { Schema } = mongoose

const product = new Schema({
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    imgURL: { type: String },
    categoryID: { type: String }
})

module.exports = mongoose.model('product', product)