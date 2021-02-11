import axios from 'axios'

const allCityActions = {
    listarCiudades: () => {
        return async (dispatch, getState) => {
            const data = await axios.get('http://localhost:4000/api/cities')
            dispatch({type: "ALL_CITIES", payload: data.data.respuesta})
        }
    },

    newCity: city => {
        return async (dispatch, getState) => {
            const token = getState().auth.loggedUser ? getState().auth.loggedUser.token : ''
            try {
                const respuesta = await axios.post('http://localhost:4000/api/cities', city, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                dispatch({type: 'NEW_CITY', payload: respuesta.data})
                alert("Has agregado tu nueva ciudad")
            } catch(err) {
                if (err.response.status === 401) {
                    alert("Usted no está autorizado a cargar una nueva ciudad")
                }
            }
     }
    }
}

export default allCityActions