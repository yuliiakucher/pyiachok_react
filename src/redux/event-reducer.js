import {EventAPI} from "../components/api/api";

const InitialState = ({

})

const EventReducer = (state=InitialState, action) => {
    return state
}


export const createEvent = (place_id, data) => {
    return dispatch => {
        EventAPI.createEvent(place_id, data)
            .then(response => {
                console.log(response)
            })
    }
}

export default EventReducer
