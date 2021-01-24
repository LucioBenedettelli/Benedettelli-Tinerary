const City = require("../models/City")

const cityController = {
    addCity: (req, res) => {

        const saveCity = new City({
            cityName: req.body.cityName,
            cityImage: req.body.cityImage
        })
        console.log(saveCity)
        saveCity.save()
        .then(saveCity => {
            return res.json({success: true, respuesta: saveCity})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },

    allCities: async (req, res) => {
        City.find()
        .then(resultado => res.json({success: true, respuesta: resultado}))
    
    },

    oneCity:  (req, res) => {
        const id = req.params.id
        City.findOne({_id: id})
        .then(resultado => res.json({success: true, respuesta: resultado}))
        .catch(error => res.json({success: false, error: error}))
    }

}

module.exports = cityController