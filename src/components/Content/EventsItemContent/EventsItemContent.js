import React from "react";

import styles from "./EventsItemContent.module.css";
import Card from "react-bootstrap/Card";



const EventsItemContent = () => {
    return (
        <Card className={styles.wrapper}>
            <Card.Header >
                <h4 className={styles.name}>Топ событий</h4>
            </Card.Header>
            <Card.Body> alalal</Card.Body>
            <Card.Footer>
                <a href='/places'>Смотреть все события...</a>
            </Card.Footer>
        </Card>
    )
}


export default EventsItemContent
