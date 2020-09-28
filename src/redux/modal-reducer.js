const HANDLE_CLOSE = 'HANDLE_CLOSE'
const HANDLE_SHOW = 'HANDLE_SHOW'
const HANDLE_ACTIVE_TAB = 'HANDLE_ACTIVE_TAB'


const initialState = {
    show: false,
    activeTab: 'login'
}

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case (HANDLE_CLOSE):
            return {
                ...state,
                show: action.value
            }
        case (HANDLE_SHOW):
            return {
                ...state,
                show: action.value
            }
        case (HANDLE_ACTIVE_TAB):
            return {
                ...state,
                activeTab: action.value
            }
        default:
            return state
    }
}

export let handleClose = (value) => ({type: HANDLE_CLOSE, value})
export let handleShow = (value) => ({type: HANDLE_SHOW, value})
export let handleActiveTab = (value) => ({type: HANDLE_ACTIVE_TAB, value})


export default ModalReducer
