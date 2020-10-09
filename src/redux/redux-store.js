import {combineReducers, createStore, applyMiddleware} from "redux";
import LoginReducer from "./login-reducer";
import thunkMiddleware from 'redux-thunk';
import ModalReducer from "./modal-reducer";
import RegistrationReducer from "./registration-reducer";
import ProfileReducer from "./profile-reducer";
import PlaceReducer from "./place-reducer";
import AlertReducer from "./alert-reducer";

let reducers = combineReducers({
    LoginPage: LoginReducer,
    RegistrationPage: RegistrationReducer,
    ModalPage: ModalReducer,
    ProfilePage: ProfileReducer,
    PlacePage: PlaceReducer,
    AlertPage: AlertReducer
})

let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware
    ))

export default store
