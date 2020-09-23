import * as axios from "axios";
import {userAuth} from "../components/api/api";

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


export const userLogin = user => {
    return (dispatch) => {
            userAuth.userLogin(user)
            .then(response => {
                localStorage.setItem("token", response.data.access)
                dispatch(loginUserAC(response.data.user))
                console.log('response data',response.data)
            })
            .catch(err => dispatch(loginUserAC(err.response.status)))
    }
}

export default loginReducer
