import {CommentsAPI, EventAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_ALL_COMMENTS = 'SET_ALL_COMMENTS'

const initialState = ({
    comments: []
})

const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return {
                ...state
            }
    }
}

let setAllComments = (comments) => ({type: SET_ALL_COMMENTS, comments})

export const getAllComments = (place_id) => {
    return dispatch => {
        CommentsAPI.showAllComments(place_id)
            .then(response => {
                console.log(response)
                dispatch(setAllComments(response.data))
            })
    }
}

export const createComment = (place_id, data) => {
    console.log(data)
    return dispatch => {
       CommentsAPI.createComment(place_id, data)
            .then(response => {
                console.log(response)
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export default CommentReducer
