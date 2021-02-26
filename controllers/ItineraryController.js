const Itinerary = require("../models/Itinerary")

const ItineraryController = {
    addItinerary: (req, res) => {

        const saveItinerary = new Itinerary({
            title: req.body.title,
            userName: req.body.userName,
            imgProfile: req.body.imgProfile,
            likes: req.body.likes,
            hours: req.body.hours,
            price: req.body.price,
            hashtag: req.body.hashtag,
            comments: req.body.comments,
            activities: req.body.activities,
            idCity: req.body.idCity


        })
       

        saveItinerary.save()
        .then(saveItinerary => {
            return res.json({success: true, respuesta: saveItinerary})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },

    allItineraries: async (req, res) => {
        Itinerary.find()
        .then(resultado => res.json({success: true, respuesta: resultado}))
    
    },

    itinerariesById: async (req,res) => {
    const id = req.params.idCity
    const register = await Itinerary.find({idCity: id})  
    res.json({success: true, respuesta: register})
    
    },


    addComment: (req,res) => {

        Itinerary.findOneAndUpdate(
            {_id: req.body.itineraryId},
            {$push: {comments: {comment: req.body.comments, userName: req.body.userName, imgProfile: req.body.imgProfile}}}
        )

        .then(data => {
            return res.json({success: true, respuesta: data})
        })

        .catch(error =>{
            return res.json({success: false, error: error})
        })
},

}

module.exports = ItineraryController
