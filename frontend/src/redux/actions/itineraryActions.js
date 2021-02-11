import axios from "axios";


const itineraryActions = {
  mostrarID: (id) => {
    return async (dispatch, getState) => {
      const data = await axios.get("http://localhost:4000/api/itinerary/" + id);
      dispatch({
        type: "MOSTRAR_ITINERARY",
        payload: data.data.respuesta,
      });
    };
    

    
  },

  addComments: comentario => {
    return async(dispatch,getState)=>{
        const respuesta = await axios.post('http://localhost:4000/api/itineraries/', comentario)

        if(respuesta.data.success === true){
         const respuesta = await axios.get('http://localhost:4000/api/itineraries/'+comentario.cityId)
         dispatch(
             {
                 type: 'MOSTRAR_ITINERARY',
                 payload:respuesta.data.respuesta

             }
         )
        }
    }


}
 

  
}


export default itineraryActions;
