const initialState = {}

const allCityReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ALL_CITIES":
            return {
                ...state,
                cities: action.payload
            }
            
        case 'NEW_CITY':
            action.payload.success ? alert("Se grabó correctamente") : alert(action.payload.mensaje)
            return state

        default:
            return state
    }
}

export default allCityReducer