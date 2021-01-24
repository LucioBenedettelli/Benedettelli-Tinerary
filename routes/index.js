const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/itineraries/:id')
.get(cityController.oneCity)


module.exports = router
