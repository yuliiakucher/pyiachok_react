const SHOW_ALERT = 'SHOW_ALERT'
const HIDE_ALERT = 'HIDE_ALERT'

const initialState = {
    text: '',
    header: '',
    variant:''
}

const AlertReducer = (state=initialState, action) => {
    switch (action.type){
        case SHOW_ALERT:{
            return {
                ...state,
                text: action.text,
                header: action.header,
                variant: action.variant
            }
        }
        case HIDE_ALERT:{
            return {
                ...state,
                header: null,
                text: null
            }
        }
        default:
            return state
    }
}

export const hideAlert = () => ({type: HIDE_ALERT})

export const setAlert = (text, header, variant) => {
    return (dispatch) => {
        dispatch({type: SHOW_ALERT, text, header, variant})
        setTimeout(() => dispatch(hideAlert()), 3000)
    }
}


export default AlertReducer
