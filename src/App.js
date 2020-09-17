import React from 'react';
import 'bootstrap/dist/css/bootstrap.min (2).css';

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "./components/Modal/ModalContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from "./components/Content/Content";
import {connect} from "react-redux";
import getProfileFetch from "./redux/profile-fetch";

class App extends React.Component{

    componentDidMount = () => {
        this.props.getProfileFetch()
    }
    render() {
        return (
            <BrowserRouter>
                <>
                    <HeaderContainer/>
                    {/*<Route path='/signup' render={() => <Registration/>}/>*/}
                    {/*<Route path='/login' render={() => <Login />}/>*/}
                    <ModalContainer/>
                    <Content/>

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
