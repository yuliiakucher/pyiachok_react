import {combineReducers, createStore, applyMiddleware, compose} from "redux";
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
