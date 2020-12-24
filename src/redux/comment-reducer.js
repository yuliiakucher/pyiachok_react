import {CommentsAPI, EventAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_ALL_COMMENTS = 'SET_ALL_COMMENTS'
const SET_COMMENT = 'SET_COMMENT'

const initialState = ({
    comments: [],
    comment: {}
})

const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case SET_COMMENT:
            return {
                ...state,
                comment: action.comment
            }
        default:
            return {
                ...state
            }
    }
}

let setAllComments = (comments) => ({type: SET_ALL_COMMENTS, comments})
let setComment = (comment) => ({type: SET_COMMENT, comment})

export const getAllComments = (place_id) => {
    return dispatch => {
        CommentsAPI.showAllComments(place_id)
            .then(response => {
                dispatch(setAllComments(response.data))
            })
    }
}

export const getCommentForEdit = (comment_id) => {
    return dispatch => {
        CommentsAPI.showCommentForEdit(comment_id)
            .then(response => {
                console.log(response)
                dispatch(setComment(response.data))
            })
    }
}

export const createComment = (place_id, data) => {
    console.log(data)
    return dispatch => {
       CommentsAPI.createComment(place_id, data)
            .then(response => {
                dispatch(setAlert(response.data.message, 'Отлично', 'success'))
                dispatch(getAllComments(place_id))
            })
            .catch(err => {
                dispatch(setAlert(err.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}

export default CommentReducer
