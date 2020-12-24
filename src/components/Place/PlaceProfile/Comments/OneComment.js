import React, {useState} from "react";
import Card from "react-bootstrap/cjs/Card";
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import default_user from "../../../media/default-user-image.png";
import Stars from "../../../utilits/Stars";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons";
import CreateComment from "./CreateComment";

const OneComment = ({userId, comment, getCommentForEdit, handleActive}) => {

    const [icon, setIcon] = useState(false)

    const handleClick = () => {
        getCommentForEdit(comment.id)
        handleActive(0)
    }

    return (
        <Card border="light" className='my-2' key={comment.id}>
            <Container>
                <Row>
                    <Col lg={2}
                         className='d-flex flex-column align-items-center'>
                        <Image className='m-2' style={{width: '70px', height: '70px', objectFit: 'cover'}}
                               roundedCircle
                               src={comment.user.profile.photo
                                   ? `http://localhost:8000${comment.user.profile.photo}`
                                   : default_user}/>
                        <p>{comment.user.first_name} {comment.user.last_name}</p>
                    </Col>
                    <Col onMouseEnter={() => setIcon(true)}
                         onMouseLeave={() => setIcon(false)}>
                        <Card.Body >
                            <Row >
                                <Col>
                                    <Stars rating={comment.rate}/>
                                    <Card.Text>{comment.text}</Card.Text>
                                </Col>
                                <Col>
                                    {icon && comment.user.id === userId &&
                                    <div>
                                        <FontAwesomeIcon onClick={handleClick} icon={faEdit}/>
                                        <FontAwesomeIcon className='ml-2' icon={faTimes}/>
                                    </div>
                                    }
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Img
                            style={{maxWidth: '400px', maxHeight: '400px'}}
                            variant='bottom'
                            src={comment.bill ? `http://localhost:8000${comment.bill}` : null}/>
                    </Col>
                </Row>

            </Container>
        </Card>
    )
}

export default OneComment
