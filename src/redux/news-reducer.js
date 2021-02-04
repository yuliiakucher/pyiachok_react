import {NewsAPI} from "../components/api/api";
import {setAlert} from "./alert-reducer";

const SET_NEWS = 'SET_NEWS'
const SET_NEWS_TYPES = 'SET_NEWS_TYPES'

const initialState = {
    news: [],
    news_types: []
}
const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: action.payload
            }
        }
        case SET_NEWS_TYPES: {
            return {
                ...state,
                news_types: action.payload
            }
        }
        default:
            return state
    }
}

const setNews = (payload) => ({type: SET_NEWS, payload})
const setNewsTypes = (payload) => ({type: SET_NEWS_TYPES, payload})

export const getNews = (type) => {
    return dispatch => {
        NewsAPI.getNews(type)
            .then(response => {
                dispatch(setNews(response.data))
            })
    }
}

export const getNewsTypes = () => {
    return dispatch => {
        NewsAPI.getTypes()
            .then(response => {
                dispatch(setNewsTypes(response.data))
            })
    }
}

export const createNews = (place_id, data) => {
    return (dispatch) => {
        NewsAPI.createNews(place_id, data)
            .then(response => {
                console.log(response)
                dispatch((setAlert(response.data.message, 'Отлично', 'success')))
            })
            .catch(error => {
                console.log(error)
                dispatch(setAlert(error.response.data.error, 'Что-то пошло не так...', 'danger'))
            })
    }
}


export default NewsReducer
