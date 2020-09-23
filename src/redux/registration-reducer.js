import {userAuth} from "../components/api/api";

const USER_REGISTERED = 'USER_REGISTERED'

const initialState = {

}

const RegistrationReducer = (state=initialState, action) => {
    switch (action.type) {
        case USER_REGISTERED:{
            return(
                state
            )
        }
        default:
            return state
    }
}

const userReg = () => ({type: USER_REGISTERED})

export const userRegistration = (userData) => {
    return(dispatch) => {
        userAuth.userRegistration(userData)
            .then(response => console.log(response))
    }
}


export default RegistrationReducer
