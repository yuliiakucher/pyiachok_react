import React from "react";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import LoginContainer from "../Login/LoginContainer";
import RegistrationContainer from "../Registration/RegistrationContainer";
import {NavTab} from "react-router-tabs";
import "react-router-tabs/styles/react-router-tabs.scss";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {handleActiveTab} from "../../redux/modal-reducer";

const LoginModal = (props) => {
    return (
        <>
            <Modal
                show={props.show}
                onHide={() => {props.handleClose(false)}}
                // onExited={() => props.history.goBack()}
            >
                <Modal.Body>
                    {/*<div>*/}
                    {/*    <NavTab to="/login">Login</NavTab>*/}
                    {/*    <NavTab to="/reg">Registration</NavTab>*/}
                    {/*    <Switch>*/}
                    {/*        <Route*/}
                    {/*            exact*/}
                    {/*            path={`/`}*/}
                    {/*            render={() => <Redirect replace to={`/login`}/>}*/}
                    {/*        />*/}
                    {/*        <Route path={`/login`} component={LoginContainer}/>*/}
                    {/*        <Route path={`/reg`} component={RegistrationContainer}/>*/}
                    {/*    </Switch>*/}
                    {/*</div>*/}
                    <Tabs activeKey={props.activeTab} onSelect={(k) => props.handleActiveTab(k)}>
                        <Tab eventKey="login" title="Login">
                            <LoginContainer />
                        </Tab>
                        <Tab eventKey="reg" title="Registration">
                            <RegistrationContainer />
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}



export default LoginModal
