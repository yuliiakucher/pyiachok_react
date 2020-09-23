import React from "react";
import Modal from "react-bootstrap/cjs/Modal";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import LoginContainer from "../Login/LoginContainer";
import RegistrationContainer from "../Registration/RegistrationComponent";
import {NavTab} from "react-router-tabs";
import "react-router-tabs/styles/react-router-tabs.scss";
import {NavLink} from "react-bootstrap";

const LoginModal = (props) => {

    return (
        <>
            <Modal
                show={props.show}
                onHide={() => {props.handleClose(false)}}
                onExited={() => <NavLink to={'/'}/>}>
                <Modal.Body>
                    <div>
                        <NavTab to="/login">Login</NavTab>
                        <NavTab to="/reg">Registration</NavTab>

                        <Switch>
                            <Route
                                exact
                                path={`/`}
                                render={() => <Redirect replace to={`/login`}/>}
                            />
                            <Route path={`/login`} component={LoginContainer}/>
                            <Route path={`/reg`} component={RegistrationContainer}/>

                        </Switch>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal
