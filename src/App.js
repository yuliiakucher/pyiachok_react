import React from 'react';
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Places from "./components/Places/Places";
import ProfileContainer from "./components/Profile/ProfileContainer";
import PlaceProfileContainer from "./components/Place/PlaceProfile/PlaceProfileContainer";
import CreateEvent from "./components/Event/CreateEvent/CreateEvent";
import EventProfileContainer from "./components/Event/EventProfile/EventProfileContainer";
import ResetPasswordPage from "./components/Login/ResetPaswordPage/ResetPasswordPage";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <Header/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    {/*<Route path='/profile/edit' render={() => <EditProfileInfo/>}/>*/}
                    <Route exact path='/places' render={() => <Places/>}/>
                    <Route exact path='/places/place/:placeId' render={() => <PlaceProfileContainer/>}/>
                    <Route path='/places/place/:placeId/create-event' render={() => <CreateEvent/>}/>
                    <Route exact path='/api/password_reset/' render={() => <ResetPasswordPage/>}/>
                    <Route exact path='/event/:eventId' render={() => <EventProfileContainer/>}/>
                </>
            </BrowserRouter>
        )
    }
    ;
}


export default App;
