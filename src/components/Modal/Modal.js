import React from "react";
import Modal from "react-bootstrap/cjs/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import LoginContainer from "../Login/LoginContainer";
import RegistrationContainer from "../Registration/RegistrationComponent";

const LoginModal = (props) => {


    return (
        <>

            <Modal show={props.show} onHide={() => props.handleClose(false)}>
                <Modal.Body>
                    <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                        <Tab eventKey="login" title="Login">
                            <LoginContainer/>
                        </Tab>
                        <Tab eventKey="registration" title="Registration">
                            <RegistrationContainer />
                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal
