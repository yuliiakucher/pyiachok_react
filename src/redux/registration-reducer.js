import {userAuth} from "../components/api/api";

const USER_REGISTERED = 'USER_REGISTERED'

const initialState = {
    responseCode: null,
    responseMessage: null,
}

const RegistrationReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_REGISTERED:{
            return{
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

const setStatusMessage = (responseMessage, responseCode) => ({type: USER_REGISTERED, payload: {responseMessage, responseCode}})

export const userRegistration = (userData) => {
    return(dispatch) => {
        userAuth.userRegistration(userData)
            .then(response => dispatch(setStatusMessage(response.data.message, response.status)))
            .catch(error => dispatch(setStatusMessage(error.response.data.message, error.response.status)))
    }
}


export default RegistrationReducer
