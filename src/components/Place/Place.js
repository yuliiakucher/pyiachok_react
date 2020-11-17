import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {showPlacesByUser} from "../../redux/profile-reducer";



const Place = ({showPlacesByUser}) => {

    useEffect(showPlacesByUser, [])

    return (
        <>
            <NavLink to='places/create'>
                <Button variant='info' >Создать новое заведение</Button>
            </NavLink>
        </>
    )
}



export default connect(null, {showPlacesByUser})(Place)
