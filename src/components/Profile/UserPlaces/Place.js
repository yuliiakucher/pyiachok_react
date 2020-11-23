import React, {useEffect} from "react";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {showPlacesByUser} from "../../../redux/profile-reducer";
import AdminPlaces from "./AdminPlaces/AdminPlaces";


const Place = ({showPlacesByUser, admin_places}) => {

    useEffect(showPlacesByUser, [])
    console.log(admin_places)

    return (
        <>
            <NavLink to='places/create'>
                <Button variant='info'>Создать новое заведение</Button>
            </NavLink>
            {admin_places
                ? <AdminPlaces admin_places={admin_places}/>
                : null
            }

        </>
    )
}


let mapStateToProps = (state) => {
    return {
        admin_places: state.ProfilePage.admin_places
    }
}


export default connect(mapStateToProps, {showPlacesByUser})(Place)
