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
  

  
 

  
}


export default itineraryActions;
