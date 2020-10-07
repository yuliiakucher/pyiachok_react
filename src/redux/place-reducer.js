import {PlaceAPI} from "../components/api/api";

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
                    debugger
                    dispatch(setResponseInfo(response.status, response.data.message))
                }
            )
            .catch(error => dispatch(setResponseInfo(error.response.status, error.response.data.message)))
    }
}

export default PlaceReducer
