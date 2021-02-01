import axios from "axios";

const citiesActions = {
  mostrarCiudades: () => {
    return async (dispatch, getState) => {
      const data = await axios.get("http://localhost:4000/api/cities");
      dispatch({
        type: "TODAS_LASCIUDADES",
        payload: data.data.respuesta,
      });
    };
  },

  filtrarCiudades: (filterCity) => {
    return async (dispatch, getState) => {
      dispatch({
        type: "CIUDADES_FILTRADAS",
        payload: filterCity,
      });
    };
  },
};

export default citiesActions;
