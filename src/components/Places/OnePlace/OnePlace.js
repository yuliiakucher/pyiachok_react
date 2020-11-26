import React from "react";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import styles from '../../../App.module.css'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Badge} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Stars from "../../utilits/Stars";

const OnePlace = ({id, name, email, address, type, tags, rating}) => {
    return (
        <Container>
            <Card className={styles.wrapper}>
                <Row>
                    <Col>
                        <Card.Img
                            src={'https://media-cdn.tripadvisor.com/media/photo-s/14/55/97/46/creamy-risotto.jpg'}/>
                    </Col>
                    <Col>
                        <Card.Title>
                            <h4 className='my-2'>
                                <NavLink
                                    style={{textDecoration: 'none', color: 'black'}}
                                    to={`places/place/${id}`}
                                    className={styles.link}>
                                    {name}
                                </NavLink>
                                <Badge variant='success'>{type.type_name}</Badge>
                            </h4>
                        </Card.Title>
                        <Card.Subtitle>
                            <Stars rating={rating}/>
                            <p>{address}</p>
                        </Card.Subtitle>
                        <Card.Body>
                            <Card.Text>
                                {tags.map(tag => {
                                    return (
                                        <div>
                                            <FontAwesomeIcon icon={faCheck}/><span>{tag.tag_name}</span>
                                        </div>
                                    )
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}

export default OnePlace
