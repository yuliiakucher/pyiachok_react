import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import {NavLink} from "react-router-dom";


const AdminPlaces = ({admin_places}) => {


    return (
        <ListGroup variant="flush">
            {admin_places.map(place => (
                <ListGroup.Item key={place.id}>
                    <NavLink to={`/profile/places/edit/${place.id}`}>
                        {place.name}
                    </NavLink>
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default AdminPlaces

