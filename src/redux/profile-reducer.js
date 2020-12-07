import {PlaceAPI, userAuth, userProfile} from "../components/api/api";
import {setAlert} from "./alert-reducer";
import {getProfileInfo, loginUserAC} from "./login-reducer";
import {setLoader} from "./loader-reducer";

const EDIT_PROFILE = 'EDIT_PROFILE'
const EDIT_PASSWORD = 'EDIT_PASSWORD'
const SET_ADMIN_PLACES = 'SET_ADMIN__PLACES'

const initialState = {

    admin_places: [],
    profileStatusCode: null,
    passwordStatusCode: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
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

        case SET_ADMIN_PLACES:
            return {
                ...state,
                admin_places: action.admin_places
            }
        default:
            return state
    }
}


let setAdminPlaces = (admin_places) => ({type: SET_ADMIN_PLACES, admin_places})


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

export const showPlacesByUser = () => {
    return dispatch => {
        PlaceAPI.getPlacesByUser()
            .then(response => {
                dispatch(setAdminPlaces(response.data))
            })
    }
}

export const getUserProfile = () => {
    return (dispatch) => {
        dispatch(setLoader(true))
        userProfile.showProfile()
            .then(response => {
                let {id, first_name, last_name, email, profile, owned_places} = response.data
                dispatch(getProfileInfo(id, first_name, last_name, email, profile.photo, owned_places))
                dispatch(setLoader(false))
            })
    }

}

export default ProfileReducer
