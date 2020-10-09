const HANDLE_CLOSE = 'HANDLE_CLOSE'
const HANDLE_SHOW = 'HANDLE_SHOW'
const HANDLE_CLOSE_C_P = 'HANDLE_CLOSE_C_P'
const HANDLE_SHOW_C_P = 'HANDLE_SHOW_C_P'
const HANDLE_ACTIVE_TAB = 'HANDLE_ACTIVE_TAB'


const initialState = {
    show: false,
    showCreatePlace: false,
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
        case (HANDLE_SHOW_C_P):
            return {
                ...state,
                showCreatePlace: action.value
            }
        case (HANDLE_CLOSE_C_P):
            return {
                ...state,
                showCreatePlace: action.value
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

export let handleCloseCreatePlace = (value) => ({type: HANDLE_CLOSE_C_P, value})
export let handleShowCreatePlace = (value) => ({type: HANDLE_SHOW_C_P, value})

export default ModalReducer
