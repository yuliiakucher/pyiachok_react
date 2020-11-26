import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import default_user from "../../media/default-user-image.png";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faVenus, faMars} from "@fortawesome/free-solid-svg-icons";

const EventCreator = (user) => {
    console.log(user)
    const {id, first_name, last_name, email, profile} = user
    return (
        <Card key={id} className='my-2'>
            <Card.Body>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Image  style={{width: '70px', height: '70px', objectFit: 'cover'}} roundedCircle
                                   src={profile && profile.photo
                                       ? `http://localhost:8000${profile.photo}`
                                       : default_user}/>
                        </Col>
                        <Col >
                            <Row>
                                <p>{first_name} {last_name}</p>
                                <p>{profile && profile.sex === 'f'
                                    ? <FontAwesomeIcon icon={faVenus}/>
                                    : <FontAwesomeIcon icon={faMars}/>
                                }</p>
                                <p><FontAwesomeIcon icon={faEnvelope}/> {email}</p>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Card.Body>

        </Card>
    )
}

export default EventCreator
