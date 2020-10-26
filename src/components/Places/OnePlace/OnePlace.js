import React from "react";
import Card from "react-bootstrap/Card";

const OnePlace = ({name, email, address}) => {
    return(
        <Card className={'w-75 m-2'}>
            <Card.Title>{name}</Card.Title>
            <Card.Body>
                {email}
                {address}
            </Card.Body>
        </Card>
    )
}

export default OnePlace
