import React from "react";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import styles from './OnePlace.module.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const OnePlace = ({id, name, email, address, type}) => {
    return(
        <Container>
            <Card className={styles.wrapper}>
                <Row>
                    <Col>
                        <Card.Img src={'https://media-cdn.tripadvisor.com/media/photo-s/14/55/97/46/creamy-risotto.jpg'}/>
                    </Col>
                    <Col>
                        <Card.Title >
                                <NavLink
                                    style={{textDecoration: 'none', color: 'black'}}
                                    className={styles.title}
                                    to={`places/place/${id}`}>
                                    {name}
                                </NavLink>
                        </Card.Title>
                        <Card.Subtitle>{type.type_name}</Card.Subtitle>
                        <Card.Body>
                            {email}
                            {address}
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default OnePlace
