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


export default ReAuthReducer
