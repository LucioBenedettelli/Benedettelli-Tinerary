const initialState = {
    loggedUser: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_USER':
            localStorage.setItem('name', action.payload.response.name)
            localStorage.setItem('token', action.payload.response.token)
            localStorage.setItem('URLpic', action.payload.response.URLpic)
            return {
                ...state,
                loggedUser: action.payload.response
            }
        case 'LOG_OUT_USER': 
            localStorage.clear()
            return {
                ...state,
                loggedUser: null
            }
        default:
            return state
    }
}

module.exports = authReducer