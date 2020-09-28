import React from 'react';
import 'bootstrap/dist/css/bootstrap.min (2).css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import Profile from "./components/Profile/Profile";
import Places from "./components/Places/Places";
import Modal from "./components/Modal/Modal";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>
                    <Route exact path='/profile' render={() => <Profile/>}/>
                    <Route exact path='/places' render={() => <Places/>}/>
                </>
            </BrowserRouter>
        )
    }
    ;
}



export default App;
