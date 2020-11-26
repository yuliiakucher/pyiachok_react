import {userAuth, userProfile} from "../components/api/api";
import {setPreloader} from "./profile-reducer";
import {setLoader} from "./loader-reducer";
import {handleClose} from "./modal-reducer";

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const SHOW_PROFILE = 'SHOW_PROFILE'


const initialState = {
    statusCode: null,
    isAuth: false,
    first_name: '',
    last_name: '',
    email: '',
    photo: null,
    owned_places: [],
}

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGOUT_USER: {
            return {
                ...state,
                isAuth: false,
                first_name: '',
                last_name: '',
                email: '',
                photo: null,
                owned_places: [],
            }
        }
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


export const logOut = () => ({type: LOGOUT_USER})


export let getProfileInfo = (first_name, last_name, email, photo, owned_places) => (
    {type: SHOW_PROFILE, payload: {first_name, last_name, email, photo, owned_places}}
)

export const userLogin = user => {
    return (dispatch) => {
        userAuth.userLogin(user)
            .then(response => {
                localStorage.setItem("token", response.data.access)
                localStorage.setItem("refresh_token", response.data.refresh)
                dispatch(handleClose(false))
                dispatch(loginUserAC(response.status))
                dispatch(setLoader(true))
                userProfile.showProfile()
                    .then(response => {
                        let {first_name, last_name, email, profile, owned_places} = response.data
                        dispatch(getProfileInfo(first_name, last_name, email, profile.photo, owned_places))
                        dispatch(setLoader(false))
                        console.log('response data show user', response.data)
                    })
                console.log('response data', response.data)
            })
            .catch(err => dispatch(loginUserAC(err.response.status)))
    }
}

export default LoginReducer
