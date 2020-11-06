import {PlaceAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";
import {setPreloader} from "./profile-reducer";

const SET_RESPONSE_INFO = 'SET_RESPONSE_INFO'
const SET_TAGS = 'SET_TAGS'
const SET_MAP_INFO = 'SET_MAP_INFO'
const SET_ALL_PLACES = 'SET_ALL_PLACES'
const SET_ONE_PLACE = 'SET_ONE_PLACE'
const HANDLE_MODAL = 'HANDLE_MODAL'

const initialState = {
    statusCode: null,
    statusMessage: '',
    tags: [],
    spec: [],
    type:[],
    lat: null,
    lng: null,
    places: [],
    place: {},
    showModal: false
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
        case SET_TAGS: {
            return {
                ...state,
                tags: action.tags,
                spec: action.spec,
                type: action.types,
            }
        }
        case SET_MAP_INFO: {
            return {
                ...state,
                lat: action.lat,
                lng: action.lng
            }
        }
        case SET_ALL_PLACES: {
            return {
                ...state,
                places: action.places
            }
        }
        case SET_ONE_PLACE: {
            return {
                ...state,
                place: action.place
            }
        }
        case HANDLE_MODAL: {
            return{
                ...state,
                showModal: action.value
            }
        }
        default:
            return state
    }
}

const setResponseInfo = (statusCode, statusMessage) => ({type: SET_RESPONSE_INFO, statusCode, statusMessage})
const setTags= (tags, spec, types) => ({type: SET_TAGS, tags,spec, types})
const setAllPlaces =(places) => ({type: SET_ALL_PLACES, places})
const setOnePlace =(place) => ({type: SET_ONE_PLACE, place})
export const getMapInfo = (lat, lng) => ({type: SET_MAP_INFO, lat, lng})
export const handleModal = (value) => ({type: HANDLE_MODAL, value})

export const getResponseInfo = (values) => {
    values.tags = [...(values.tags.map(value => ({'tag_name': value})))]
    values.specificities = [...(values.specificities.map(value => ({'specificity_name': value})))]
    console.log(values)
    return (dispatch) => {
        PlaceAPI.createPlace(values)
            .then(response => {
                    dispatch((setAlert(response.data.message, 'Отлично', 'success')))
                }
            )
            .catch(error => {
                dispatch(setAlert(error.response.data.message, 'Что-то пошло не так...', 'danger'))
            })

    }
}


export const getTagsInfo = () => {
    return dispatch => {
        PlaceAPI.getTags()
            .then(response => {
                dispatch(setTags(response.data.tags, response.data.spec, response.data.type))
            })
    }
}

export const getAllPlaces = () => {
    return dispatch => {
        PlaceAPI.getAllPlaces()
            .then(response => {
                console.log(response)
                dispatch(setAllPlaces(response.data))
            })
    }
}

export const getPlaceProfile = (placeId) => {
    return dispatch => {
        PlaceAPI.getPlaceProfile(placeId)
            .then(response => {
                dispatch(setOnePlace(response.data))
                dispatch(setPreloader(false))
            })

    }
}

export default PlaceReducer
