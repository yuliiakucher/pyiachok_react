
const RELOGIN_USER = 'RELOGIN_USER'


const initialState = {
    isAuth: false
}

const ReAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case RELOGIN_USER: {
            return {
                ...state,
                isAuth: action.payload
            }
        }
        default:
            return state
    }
}


export const setReloginUser = (payload) => ({type: RELOGIN_USER, payload})


export const reloginUser = (data) => {
    console.log(data)
    return dispatch => {
        dispatch(setReloginUser(data))
    }
}

export default ReAuthReducer
