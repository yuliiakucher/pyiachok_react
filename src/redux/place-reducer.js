import {PlaceAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";
import {setPreloader} from "./profile-reducer";

const SET_RESPONSE_INFO = 'SET_RESPONSE_INFO'
const SET_TAGS = 'SET_TAGS'
const SET_MAP_INFO = 'SET_MAP_INFO'
const SET_ALL_PLACES = 'SET_ALL_PLACES'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_ONE_PLACE = 'SET_ONE_PLACE'
const HANDLE_MODAL = 'HANDLE_MODAL'
const SET_TOP_PLACES = 'SET_TOP_PLACES'

const initialState = {
    statusCode: null,
    statusMessage: '',
    tags: [],
    spec: [],
    type:[],
    lat: null,
    lng: null,
    places: [],
    totalCount: '',
    place: {},
    rate: '',
    showModal: false,
    top_places: [],
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
                place: action.place,
                rate: action.rate
            }
        }
        case HANDLE_MODAL: {
            return{
                ...state,
                showModal: action.value
            }
        }
        case SET_TOTAL_COUNT: {
            return{
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_TOP_PLACES: {
            return {
                ...state,
                top_places: action.places,
            }
        }
        default:
            return state
    }
}

const setTags= (tags, spec, types) => ({type: SET_TAGS, tags,spec, types})
const setAllPlaces =(places) => ({type: SET_ALL_PLACES, places})
const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
const setOnePlace =(place, rate) => ({type: SET_ONE_PLACE, place, rate})
const setTopPlaces =(places, rate) => ({type: SET_TOP_PLACES, places, rate})
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

export const getAllPlaces = (page) => {
    return dispatch => {
        PlaceAPI.getAllPlaces(page)
            .then(response => {
                console.log(response)
                dispatch(setAllPlaces(response.data.data))
                dispatch(setTotalCount(response.data.count))
            })
    }
}

export const getPlaceProfile = (placeId) => {
    return dispatch => {
        PlaceAPI.getPlaceProfile(placeId)
            .then(response => {
                dispatch(setOnePlace(response.data.data, response.data.rate))
                dispatch(setPreloader(false))
            })

    }
}

export const getTopPlaces = () => {
    return dispatch => {
        PlaceAPI.getTopPlaces()
            .then(response => {
                console.log(response)
                dispatch(setTopPlaces(response.data))
            })
    }
}

export default PlaceReducer
