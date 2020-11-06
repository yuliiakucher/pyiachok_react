import React from "react";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";

const OnePlace = ({id, name, email, address}) => {
    return(
        <Card className={'w-75 m-2'}>
            <Card.Title>
                <NavLink to={`places/place/${id}`}>
                    {name}
                </NavLink>


            </Card.Title>
            <Card.Body>
                {email}
                {address}
            </Card.Body>
        </Card>
    )
}

export default OnePlace
