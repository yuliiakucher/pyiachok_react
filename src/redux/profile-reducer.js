import {userAuth, userProfile} from "../components/api/api";
import {loginUserAC} from "./login-reducer";

const SHOW_PROFILE = 'SHOW_PROFILE'
const EDIT_PROFILE = 'EDIT_PROFILE'
const EDIT_PASSWORD = 'EDIT_PASSWORD'

const initialState = {
    isAuth: false,
    first_name: '',
    last_name: '',
    email: '',
    photo: null,
    owned_places: [],
    passwordStatusCode: null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_PROFILE: {
            return{
                ...state,
                ...action.payload,
                isAuth: true
            }
        }
        case EDIT_PASSWORD:{
            return {
                ...state,
                passwordStatusCode: action.passwordStatusCode
            }
        }
        default:
            return state
    }
}

let getProfileInfo = (first_name, last_name, email, photo, owned_places) => (
    {type: SHOW_PROFILE, payload: {first_name, last_name, email, photo, owned_places}}
)

let getPasswordStatusCode = (passwordStatusCode) => ({type: EDIT_PASSWORD, passwordStatusCode})

export const showUser = () => {
    return (dispatch) => {
        userProfile.showProfile()
            .then(response => {
                let {first_name, last_name, email, photo, owned_places} = response.data
                dispatch(getProfileInfo(first_name, last_name, email, photo, owned_places))
                console.log('response data show user', response.data)
            })
            .catch(err => console.log(err))
    }
}

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
