const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    zipcode: {
        type: Number,
        required: false
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    neighbourhood: {
        type: String,
        required: false
    },
    average: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Shop', shopSchema)