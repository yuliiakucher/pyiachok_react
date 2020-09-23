import React from 'react';
import 'bootstrap/dist/css/bootstrap.min (2).css';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {connect} from "react-redux";
import getProfileFetch from "./redux/profile-fetch";
import Profile from "./components/Profile/Profile";
import Modal from "./components/Modal/Modal";

class App extends React.Component {

    componentDidMount = () => {
        this.props.getProfileFetch()
    }

    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    <ModalContainer/>
                    <Route exact path='/' render={() => <Content/>}/>

                    <Route exact path='/profile' render={() => <Profile/>}/>


                </>
            </BrowserRouter>
        )
    }
    ;
}

const mapDispatchToProps = dispatch => ({
    getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);
