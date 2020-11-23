import React from "react";

import styles from "./../../../App.module.css";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";



const EventsItemContent = () => {
    return (
        <Card>
            <Card.Header>
                <h4 className={styles.name}>Топ событий</h4>
            </Card.Header>
            <Card.Body>

            </Card.Body>
            <Card.Footer>
                <NavLink to='/places'>Смотреть все события...</NavLink>
            </Card.Footer>

        </Card>
    )
}


export default EventsItemContent
