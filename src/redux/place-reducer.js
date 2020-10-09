import {PlaceAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_RESPONSE_INFO = 'SET_RESPONSE_INFO'

const initialState = {
    statusCode: null,
    statusMessage: '',
}

const PlaceReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESPONSE_INFO: {
            return {
                ...state,
                statusCode: action.statusCode,
                statusMessage: action.statusMessage
            }
        }
        default:
            return state
    }
}

const setResponseInfo = (statusCode, statusMessage) => ({type: SET_RESPONSE_INFO, statusCode, statusMessage})

export const getResponseInfo = (values) => {
    return (dispatch) => {
        PlaceAPI.createPlace(values)
            .then(response => {
                    dispatch((setAlert(response.data.message, 'Отлично', 'success')))
                }
            )
            .catch(error => {
                console.log(error.response)
                dispatch(setAlert(error.response.data.message, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export default PlaceReducer
