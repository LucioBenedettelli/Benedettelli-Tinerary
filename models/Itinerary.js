const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    userName: {type: String, required: true},
    imgProfile: {type: String, required: true},
    likes: {type: Number, required: true, default:0},
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtag: {type: Array, required: true},
    comments: {type: [{userName: String, imgProfile: String, comment: String}], required: false, default:[]},
    activities: {type: [{imgActivity: String, titleActivity: String}], required: false},
    idCity: {type: mongoose.Schema.ObjectId, ref: "city"}



})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary