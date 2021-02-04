import React from "react";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import RegistrationContainer from "../Registration/RegistrationContainer";
import "react-router-tabs/styles/react-router-tabs.scss";
import Login from "../Login/Login";


const LoginModal = (props) => {
    return (
        <>
            <Modal
                show={props.show}
                onHide={() => {
                    props.handleClose(false)
                }}
            >
                <Modal.Body>
                    <Tabs activeKey={props.activeTab} onSelect={(k) => props.handleActiveTab(k)}>
                        <Tab eventKey="login" title="Login">
                            <Login/>
                        </Tab>
                        <Tab eventKey="reg" title="Registration">
                            <RegistrationContainer/>
                        </Tab>
                    </Tabs>
                    <div>lalala</div>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default LoginModal
