import React from "react";

import styles from "./PlacesItemContent.module.css";
import Card from "react-bootstrap/Card";



const PlacesItemContent = () => {
    return (
        <Card className={styles.wrapper}>
            <Card.Header >
                <h4 className={styles.name}>Топ заведений</h4>
            </Card.Header>
            <Card.Body> alalal</Card.Body>
            <Card.Footer >
                    <a href='/places'>Смотреть все заведения...</a>
            </Card.Footer>
        </Card>
    )
}


export default PlacesItemContent
