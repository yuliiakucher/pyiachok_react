import {userAuth, userProfile} from "../components/api/api";
import {loginUserAC} from "./login-reducer";

const SHOW_PROFILE = 'SHOW_PROFILE'
const EDIT_PROFILE = 'EDIT_PROFILE'

const initialState = {
    isAuth: false,
    first_name: '',
    last_name: '',
    email: '',
    photo: null,
    owned_places: []
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
        default:
            return state
    }
}

let getProfileInfo = (first_name, last_name, email, photo, owned_places) => (
    {type: SHOW_PROFILE, payload: {first_name, last_name, email, photo, owned_places}}
)

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


export default ProfileReducer
