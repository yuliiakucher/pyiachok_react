import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import OneEvent from "../OneEvent";
import EventCreator from "./EventCreator";
import styles from '../../../App.module.css'

const EventProfile = ({event}) => {

    console.log(event)

    return (
        <Container>
            {event.place_id &&
            <ol className={'m-2 breadcrumb'}>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/'}>
                        Домой
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/places'}>
                        Заведения
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={`/places/place/${event.place_id.id}`}>
                        {event.place_id.name}
                    </NavLink>
                </li>
                <li className={'breadcrumb-item active'}>event</li>
            </ol>
            }

            <Row>
                <Col>
                    <h5 className={styles.name}>General info about event</h5>
                    <OneEvent event={event}/>
                </Col>
                <Col>
                    <Row>
                        <Card className='my-2'>
                            <Card.Body>
                                <Card.Title className={styles.name}><h6>Pyiachok Creator</h6></Card.Title>
                                <EventCreator {...event.creator}/>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card>
                            <Card.Body>
                                <Card.Title className={styles.name}><h6>All Participants</h6></Card.Title>
                                {event.participants && event.participants.map(participant => (
                                    <EventCreator key={participant.id} {...participant}/>
                                ))}
                            </Card.Body>

                        </Card>
                    </Row>
                </Col>
                <Col>

                    Messages
                </Col>
            </Row>
        </Container>
    )
}


export default EventProfile
