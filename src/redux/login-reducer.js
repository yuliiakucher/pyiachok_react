
const initialState = {
    currentUser: {}
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        default:
            return state;
    }
}

export const loginUserAC = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export default loginReducer
