const SET_PRELOADER = 'SET_PRELOADER'


const initialState = {
    isLoading: true
}

const LoaderReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_PRELOADER: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default:
            return state
    }
}

export let setPreloader = (value) => ({type: SET_PRELOADER, value})


export const setLoader = (value) => {
    return (dispatch) => {
        dispatch(setPreloader(value))
    }
}


export default LoaderReducer
