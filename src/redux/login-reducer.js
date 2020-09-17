
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const initialState = {
    currentUser: null
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:{
            return {...state, currentUser: action.payload}
        }


        case LOGOUT_USER:{
            return {...state, currentUser: {}}
        }

        default:
            return state;
    }
}

export const loginUserAC = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})

export const logOut = () => ({
    type: LOGOUT_USER
})

export default loginReducer
