import {EventAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";
import {setLoader} from "./loader-reducer";

const SET_EVENTS = 'SET_EVENTS'
const SET_EVENT = 'SET_EVENT'

const InitialState = ({
    events: [],
    event: {}
})

const EventReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case SET_EVENT:
            return {
                ...state,
                event: action.event
            }
        default:
            return state
    }
}

const setEvents = (events) => ({type: SET_EVENTS, events})
const setEvent = (event) => ({type: SET_EVENT, event})

export const createEvent = (place_id, data) => {
    return dispatch => {
        EventAPI.createEvent(place_id, data)
            .then(response => {
                console.log(response)
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export const showEventsByPlace = (place_id) => {
    return dispatch => {
        EventAPI.showEventsByPlace(place_id)
            .then(response => {
                console.log(response)
                dispatch(setEvents(response.data))
            })
    }
}

export const showOneEvent = (event_id) => {
    return dispatch => {
        dispatch(setLoader(true))
        EventAPI.showOneEvent(event_id)
            .then(response => {
                console.log(response)
                dispatch(setEvent(response.data))
                dispatch(setLoader(false))
            })
    }
}

export default EventReducer
