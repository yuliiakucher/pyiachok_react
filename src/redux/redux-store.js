import {combineReducers, createStore, applyMiddleware} from "redux";
import loginReducer from "./login-reducer";
import thunkMiddleware from 'redux-thunk';
import ModalReducer from "./modal-reducer";

let reducers = combineReducers({
    LoginPage: loginReducer,
    ModalPage: ModalReducer
})

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    ))

export default store
