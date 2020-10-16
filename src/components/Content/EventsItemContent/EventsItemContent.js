import React from "react";

import styles from "./EventsItemContent.module.css";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import CustomMap from "../../CustomMap/CustomMap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


const EventsItemContent = () => {
    return (
        <Card className={styles.wrapper}>
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
