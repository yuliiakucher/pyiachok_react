import React from 'react';
import "bootswatch/dist/united/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import Places from "./components/Places/Places";
import Test from "./components/Test/Test";
import ProfileContainer from "./components/Profile/ProfileContainer";
import CreatePlace from "./components/Place/CreatePlace/CreatePlace";
import PlaceProfileContainer from "./components/Place/PlaceProfile/PlaceProfileContainer";
import CreateEvent from "./components/Event/CreateEvent/CreateEvent";


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>
                    <Route path='/profile' render={() => <ProfileContainer/>}/>
                    {/*<Route path='/profile/edit' render={() => <EditProfileInfo/>}/>*/}
                    <Route exact path='/place/create' render={() => <CreatePlace/>}/>
                    <Route exact path='/places' render={() => <Places/>}/>
                    <Route exact path='/places/place/:placeId' render={() => <PlaceProfileContainer/>}/>
                    <Route path='/places/place/:placeId/create-event' render={() => <CreateEvent/>}/>
                    <Route path='/test' render={() => <Test/>}/>
                </>
            </BrowserRouter>
        )
    }
    ;
}


export default App;
