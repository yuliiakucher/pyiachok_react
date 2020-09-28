import {combineReducers, createStore, applyMiddleware} from "redux";
import LoginReducer from "./login-reducer";
import thunkMiddleware from 'redux-thunk';
import ModalReducer from "./modal-reducer";
import RegistrationReducer from "./registration-reducer";

let reducers = combineReducers({
    LoginPage: LoginReducer,
    RegistrationPage: RegistrationReducer,
    ModalPage: ModalReducer
})

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    ))

export default store
