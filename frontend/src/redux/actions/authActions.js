import axios from "axios"

const authActions = {
    newUser: (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/register', nuevoUsuario)
           if (!respuesta.data.success) {
               return respuesta.data
           }
            dispatch({type: 'LOG_USER', payload: respuesta.data})
        }
    },

    logoutUser: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT_USER'})
        }
    },


    logFromLS: (token) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post('http://localhost:4000/api/user/ls', {token}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                dispatch({type: 'LOG_USER', payload: {response: {...respuesta.data.response}}})
            } catch(err) {
               
                if (err.response.status === 401) {
                    alert("Usted está intentando cagarme...")
                    localStorage.clear()
                    return '/'
                }
                
            }
        }
    },
    
    loginUser: (user) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/login', user)
            if (!respuesta.data.success) {
                return respuesta.data
            }
            dispatch({type:'LOG_USER', payload: respuesta.data})
        }
    }
}

export default authActions 