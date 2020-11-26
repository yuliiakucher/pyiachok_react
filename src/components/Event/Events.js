import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import styles from '../../App.module.css'
import OneEvent from "./OneEvent";

const Events = ({events}) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title><h4 className={styles.name}>Пиячки</h4></Card.Title>
                <ListGroup variant="flush">
                    {events.map(event => (
                            <OneEvent key={event.id} event={event}/>
                        )
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Events
