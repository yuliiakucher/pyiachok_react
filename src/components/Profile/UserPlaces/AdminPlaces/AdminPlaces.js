import React from "react";
import ListGroup from "react-bootstrap/ListGroup";


const AdminPlaces = ({admin_places}) => {
    return (
        <ListGroup variant="flush">
            {admin_places.map(place => (
                <ListGroup.Item key={place.id}>{place.name}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default AdminPlaces

