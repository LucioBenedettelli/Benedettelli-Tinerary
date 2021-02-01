const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const ItineraryController = require("../controllers/ItineraryController")

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/itineraries/:id')
.get(cityController.oneCity)

router.route("/itineraries")
.post(ItineraryController.addItinerary)

router.route("/itinerary/:idCity")
.get(ItineraryController.itinerariesById)

module.exports = router
