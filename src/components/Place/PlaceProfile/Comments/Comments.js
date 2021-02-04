import React, {useRef, useState} from "react";
import Card from "react-bootstrap/cjs/Card";
import styles from "../../../../App.module.css";
import Button from "react-bootstrap/Button";
import {Col, Container, Row} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import CreateComment from "./CreateComment";
import OneComment from "./OneComment";

const Comments = ({userId, comments, createComment, placeId, getCommentForEdit, comment, editComment}) => {

    const [active, setActive] = useState('')
    const commentForm = useRef(null);


    const handleActive = (value) => {
        setActive(value)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className={styles.name}>
                    <Container>
                        <Accordion activeKey={`${active}`}>
                            <Row>
                                <Col lg={9} className='mt-2 font-weight-bold'>
                                    Комментарии
                                </Col>
                                <Col>
                                    <Accordion.Toggle
                                        as={Button}
                                        className='m-2'
                                        size='sm'
                                        eventKey='0'
                                        onClick={()=>setActive(0)}>
                                        Оставить комментарий
                                    </Accordion.Toggle>
                                </Col>
                            </Row>
                            <Row className='d-flex flex-column align-items-center'>
                                <Accordion.Collapse eventKey='0'>
                                    <CreateComment
                                        comment={comment}
                                        createComment={createComment}
                                        placeId={placeId}
                                        editComment={editComment}
                                        commentForm={commentForm}
                                    />
                                </Accordion.Collapse>
                            </Row>
                        </Accordion>
                    </Container>
                </Card.Title>

                {comments.map(comment => (
                   <OneComment
                       key={comment.id}
                       comment={comment}
                       userId={userId}
                       getCommentForEdit={getCommentForEdit}
                       handleActive={handleActive}
                       commentForm={commentForm}
                   />
                ))}
            </Card.Body>
        </Card>
    )
}
export default Comments
