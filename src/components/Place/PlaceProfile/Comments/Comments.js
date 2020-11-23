import React from "react";
import Card from "react-bootstrap/cjs/Card";
import styles from "../../../../App.module.css";
import Button from "react-bootstrap/Button";
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import default_user from '../../../media/default-user-image.png'
import Accordion from "react-bootstrap/Accordion";
import CreateComment from "./CreateComment";

const Comments = ({comments, createComment, placeId}) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className={styles.name}>
                    <Container>
                        <Accordion>
                            <Row>
                                <Col lg={9} className='mt-2 font-weight-bold'>
                                    Комментарии
                                </Col>
                                <Col>

                                    <Accordion.Toggle as={Button} className='m-2' size='sm' eventKey='0'>
                                        Оставить комментарий
                                    </Accordion.Toggle>


                                </Col>
                            </Row>
                            <Row className='d-flex flex-column align-items-center'>
                                <Accordion.Collapse eventKey='0'  >
                                    <CreateComment createComment={createComment} placeId={placeId}/>
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>
                    </Container>
                </Card.Title>

                {comments.map(comment => (
                    <Card border="light" className='my-2' key={comment.id}>
                        <Container>
                            <Row>
                                <Col lg={2}
                                     className='d-flex flex-column align-items-center'>
                                    <Image className='m-2' style={{width: '70px', height: '70px', objectFit: 'cover'}} roundedCircle
                                           src={comment.user.profile.photo
                                               ? `http://localhost:8000${comment.user.profile.photo}`
                                               : default_user}/>
                                    <p>{comment.user.first_name} {comment.user.last_name}</p>
                                </Col>
                                <Col>
                                    <Card.Body>
                                        {comment.rate}
                                        <Card.Text>{comment.text}</Card.Text>

                                    </Card.Body>
                                    <Card.Img
                                        style={{maxWidth: '400px', maxHeight: '400px'}}
                                        variant='bottom'
                                        src={comment.bill ? `http://localhost:8000${comment.bill}` : null}/>
                                </Col>
                            </Row>
                        </Container>

                    </Card>
                ))}

            </Card.Body>
        </Card>
    )
}
export default Comments
