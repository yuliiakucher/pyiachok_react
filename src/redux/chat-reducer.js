import {ChatAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_MESSAGES = 'SET_MESSAGES'
const SET_MESSAGE = 'SET_MESSAGE'

const InitialState = ({
    messages: [],
    message: {
        id: '',
        text: ''
    }

})

const ChatReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: {id: action.id, text: action.message}
            }
        default:
            return state
    }
}

const setMessages = (messages) => ({type: SET_MESSAGES, messages})
const setMessage = (id, message) => ({type: SET_MESSAGE, id, message})

export const sendMessage = (event_id, data) => {
    return dispatch => {
        ChatAPI.sendMessage(event_id, data)
            .then(response => {
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
                dispatch(showMessages(event_id))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export const showMessages = (event_id) => {
    return dispatch => {
        ChatAPI.showMessages(event_id)
            .then(response => {
                dispatch(setMessages(response.data))
            })
    }
}

export const showMessageForEdit = (msg_id) => {
    return dispatch => {
        ChatAPI.showMessageForEdit(msg_id)
            .then(response => {
                dispatch(setMessage(response.data.id, response.data.text))
            })
    }
}

export const editMessage = (msg_id, data, event_id) => {
    return dispatch => {
        ChatAPI.editMessage(msg_id, data)
            .then(response => {
                dispatch(showMessages(event_id))
            })
    }
}

export const deleteMessage = (msg_id, event_id) => {
    return dispatch => {
        ChatAPI.deleteMessage(msg_id)
            .then(response => {
                dispatch(showMessages(event_id))
            })
    }
}

export default ChatReducer
