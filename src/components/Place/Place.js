import React from "react";
import Button from "react-bootstrap/Button";
import {handleShowCreatePlace} from "../../redux/modal-reducer";
import {connect} from "react-redux";



const Place = (props) => {
    return (
        <>
            <Button variant='info' onClick={() => props.handleShowCreatePlace(true)}>Создать новое заведение</Button>
        </>
    )
}

export default connect(null,{handleShowCreatePlace})(Place)
