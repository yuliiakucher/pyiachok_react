import {userAuth, userProfile} from "../components/api/api";
import {handleClose} from "./modal-reducer";
import {setReloginUser} from "./reauth-reducer";
import {setAlert} from "./alert-reducer";

const LOGIN_USER = 'LOGIN_USER'
const SHOW_PROFILE = 'SHOW_PROFILE'


const initialState = {
    statusCode: null,
    isAuth: false,
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    photo: null,
    owned_places: [],
}

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        // case LOGOUT_USER: {
        //     return {
        //         ...state,
        //         isAuth: false,
        //         id: null,
        //         first_name: '',
        //         last_name: '',
        //         email: '',
        //         photo: null,
        //         owned_places: [],
        //     }
        // }
        case LOGIN_USER:{
            return {
                ...state,
                statusCode: action.statusCode
            }
        }

        case SHOW_PROFILE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const loginUserAC = statusCode => ({type: LOGIN_USER, statusCode})




export let getProfileInfo = (id, first_name, last_name, email, photo, owned_places) => (
    {type: SHOW_PROFILE, payload: {id, first_name, last_name, email, photo, owned_places}}
)

export const userLogin = user => {
    return (dispatch) => {
        userAuth.userLogin(user)
            .then(response => {
                localStorage.setItem("token", response.data.access)
                localStorage.setItem("refresh_token", response.data.refresh)
                dispatch(handleClose(false))
                dispatch(loginUserAC(response.status))
                dispatch(setReloginUser(true))
                // dispatch(setLoader(true))
                userProfile.showProfile()
                    .then(response => {
                        let {first_name, last_name, email, profile, owned_places} = response.data
                        dispatch(getProfileInfo(first_name, last_name, email, profile.photo, owned_places))
                        // dispatch(setLoader(false))
                        console.log('response data show user', response.data)
                    })
                console.log('response data', response.data)
            })
            .catch(err => dispatch(loginUserAC(err.response.status)))
    }
}


export const resetPassword = (data) => {
    return (dispatch) => {
        userAuth.passwordResetConfirm(data)
            .then(response => {
                dispatch((setAlert(response.data.message, 'Отлично', 'success')))
            })
            .catch(error => {
                dispatch(setAlert(error.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export default LoginReducer
