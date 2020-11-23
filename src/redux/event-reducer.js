import {EventAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_EVENTS = 'SET_EVENTS'

const InitialState = ({
    events: []
})

const EventReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.events
            }
        default:
            return state
    }
}

const setEvents = (events) => ({type: SET_EVENTS, events})

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

export default EventReducer
