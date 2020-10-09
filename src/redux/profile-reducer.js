import {userProfile} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SHOW_PROFILE = 'SHOW_PROFILE'

const EDIT_PROFILE = 'EDIT_PROFILE'
const EDIT_PASSWORD = 'EDIT_PASSWORD'
const SET_PRELOADER = 'SET_PRELOADER'

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    photo: null,
    owned_places: [],
    profileStatusCode: null,
    passwordStatusCode: null,
    isLoading: true
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case EDIT_PROFILE: {
            return {
                ...state,
                profileStatusCode: action.profileStatusCode
            }
        }
        case EDIT_PASSWORD: {
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

let getProfileInfo = (first_name, last_name, email, photo, owned_places) => (
    {type: SHOW_PROFILE, payload: {first_name, last_name, email, photo, owned_places}}
)

let getProfileStatusCode = (profileStatusCode) => ({type: EDIT_PROFILE, profileStatusCode})
let getPasswordStatusCode = (passwordStatusCode) => ({type: EDIT_PASSWORD, passwordStatusCode})

export let setPreloader = (value) => ({type: SET_PRELOADER, value})


export const showProfile = () => {
    return (dispatch) => {
        userProfile.showProfile().then(response => {
            let {first_name, last_name, email, photo, owned_places} = response.data
            dispatch(getProfileInfo(first_name, last_name, email, photo, owned_places))
            dispatch(setPreloader(false))
            console.log('response data show user', response.data)
        })
    }
}


export const editUser = (data) => {
    return (dispatch) => {
        userProfile.editProfile(data)
            .then(response => {
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export const editPassword = (data) => {
    return (dispatch) => {
        userProfile.editPassword(data)
            .then(response => {
                dispatch((setAlert(response.data.message, 'Отлично', 'success')))
            })
            .catch(error => {
                dispatch(setAlert(error.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}


export default ProfileReducer
