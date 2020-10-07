import {userProfile} from "../components/api/api";

const EDIT_PASSWORD = 'EDIT_PASSWORD'
const SET_PRELOADER = 'SET_PRELOADER'

const initialState = {
    passwordStatusCode: null,
    isLoading: true
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PASSWORD:{
            return {
                ...state,
                passwordStatusCode: action.passwordStatusCode
            }
        }
        case SET_PRELOADER: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default:
            return state
    }
}



let getPasswordStatusCode = (passwordStatusCode) => ({type: EDIT_PASSWORD, passwordStatusCode})

export let setPreloader = (value) => ({type: SET_PRELOADER, value})


export const editUser = (data) => {
    return (dispatch) => {
        userProfile.editProfile(data)
            .then(response => {
                console.log('response data edit user', response.data)
            })
            .catch(err => console.log(err))
    }
}

export const editPassword = (data) => {
    return (dispatch) => {
        userProfile.editPassword(data)
            .then(response => {
                dispatch(getPasswordStatusCode(response.status))
            })
            .catch(error => console.log(error.response))
    }
}


export default ProfileReducer
