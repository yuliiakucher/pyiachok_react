import React from "react";
import Modal from "react-bootstrap/Modal";
import "react-router-tabs/styles/react-router-tabs.scss";
import CreatePlace from "./CreatePlace";
import {connect} from "react-redux";
import {handleCloseCreatePlace} from "../../../redux/modal-reducer";


const ModalCreatePlace = (props) => {
    return (
        <>
            <Modal
                show={props.show}
                onHide={() => {
                    props.handleCloseCreatePlace(false)
                }}
            >
                <Modal.Body>
                    <CreatePlace/>
                </Modal.Body>
            </Modal>
        </>
    );
}

let mapStateToProps = state => ({
    show: state.ModalPage.showCreatePlace,
})


export default connect(mapStateToProps, {handleCloseCreatePlace})(ModalCreatePlace)
