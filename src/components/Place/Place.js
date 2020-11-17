import React from "react";
import Button from "react-bootstrap/Button";
import {handleShowCreatePlace} from "../../redux/modal-reducer";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";



const Place = (props) => {
    return (
        <>
            <NavLink to='places/create'>
                <Button variant='info' >Создать новое заведение</Button>
            </NavLink>
        </>
    )
}

export default connect(null,{handleShowCreatePlace})(Place)
