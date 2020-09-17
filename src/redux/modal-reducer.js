const HANDLE_CLOSE = 'HANDLE_CLOSE'
const HANDLE_SHOW = 'HANDLE_SHOW'



const initialState = {
    show: false,
}

const ModalReducer = (state=initialState, action) => {
    switch (action.type) {
        case (HANDLE_CLOSE):
            return{
                ...state,
                show: action.value
            }
        case (HANDLE_SHOW):
            return{
                ...state,
                show: action.value
            }
        default: return state
    }
}

export let handleClose = (value) => ({type: HANDLE_CLOSE, value})
export let handleShow = (value) => ({type: HANDLE_SHOW, value})


export default ModalReducer
