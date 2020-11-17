import {EventAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

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
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export default EventReducer
