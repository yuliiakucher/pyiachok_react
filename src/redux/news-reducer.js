import {NewsAPI} from "../components/api/api";

const SET_NEWS = 'SET_NEWS'


const initialState = {
    news: []
}
const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: action.payload
            }
        }
        default:
            return state
    }
}

const setNews = (payload) => ({type: SET_NEWS, payload})

export const getNews = (type) => {
    return dispatch => {
        NewsAPI.getNews(type)
            .then(response => {
                dispatch(setNews(response.data))
            })
    }
}


export default NewsReducer
