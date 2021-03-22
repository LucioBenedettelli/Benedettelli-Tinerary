const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const ItineraryController = require("../controllers/ItineraryController")
const userController = require("../controllers/userController")
const validator = require ("../controllers/validator")
const passport = require('passport')
require("../config/passport")

router.route('/cities')
.get(cityController.allCities)
.post(passport.authenticate('jwt', {session: false}),cityController.addCity)

router.route('/itineraries/:id')
.get(cityController.oneCity)

router.route("/itineraries")
.post(ItineraryController.addComment)

router.route("/itineraries/addItinerary")
.post(ItineraryController.addItinerary)

router.route("/itinerary/:idCity")
.get(ItineraryController.itinerariesById)

router.route('/user/register')
.post (validator.validNewAccount, userController.register)

router.route('/user/login')
.post (userController.login)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logFromLS)




module.exports = router
