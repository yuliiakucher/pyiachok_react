import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min (2).css';
import "bootswatch/dist/united/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import Places from "./components/Places/Places";
import Profile from "./components/Profile/Profile";
import Test from "./components/Test/Test";

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>
                    <Route  path='/profile' render={() => <Profile/>}/>
                    <Route  path='/places' render={() => <Places/>}/>
                    <Route  path='/test' render={() => <Test/>}/>

                </>
            </BrowserRouter>
        )
    }
    ;
}



export default App;
