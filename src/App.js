import React from 'react';
import "bootswatch/dist/united/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import Places from "./components/Places/Places";
import Profile from "./components/Profile/Profile";
import Test from "./components/Test/Test";
import CreatePlace from "./components/Place/CreatePlace/CreatePlace";
import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>
                    <Route exact path='/profile' render={() => <ProfileContainer/>}/>
                    <Route path='/profile/place/create' render={() => <CreatePlace/>}/>
                    <Route path='/places' render={() => <Places/>}/>
                    <Route path='/test' render={() => <Test/>}/>

                </>
            </BrowserRouter>
        )
    }
    ;
}


export default App;
