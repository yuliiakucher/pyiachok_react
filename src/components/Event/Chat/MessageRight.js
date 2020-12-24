import React, {useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import default_user from "../../media/default-user-image.png";
import Image from "react-bootstrap/Image";
import styles from './Message.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons";

const MessageRight = ({id, text, date, users, eventId, showMessageForEdit, deleteMessage}) => {
    const [icon, setIcon] = useState(false)

    const new_date = new Date(date)

    return (
        <Card className='my-2' style={{border: 'none'}}>
            <Container>
                <Row className='d-flex flex-row align-items-center'>
                    <Col className='d-flex flex-column align-items-end'>
                        <Row
                            className={styles.block}
                            onMouseEnter={() => setIcon(true)}
                            onMouseLeave={() => setIcon(false)}>
                            {text}
                            {icon &&
                                <div>
                                    <FontAwesomeIcon
                                        onClick={() => showMessageForEdit(id)}
                                        style={{color: '#fff'}}
                                        icon={faEdit}/>
                                    <FontAwesomeIcon
                                        onClick={() => deleteMessage(id, eventId)}
                                        style={{color: '#fff', marginLeft: '5px'}}
                                        icon={faTimes}/>
                                </div>
                            }
                        </Row>
                        <Row className={styles.date}>
                            {new_date.toDateString()}
                        </Row>
                    </Col>
                    <Col lg={2} className='d-flex flex-column align-items-center m-2'>
                        <Row>
                            <Image style={{width: '40px', height: '40px', objectFit: 'cover'}} roundedCircle
                                   src={users && users.profile.photo
                                       ? `http://localhost:8000${users.profile.photo}`
                                       : default_user}/>
                        </Row>
                        <Row className={styles.userName}>
                            {users.first_name}
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Card>
    )
}
export default MessageRight
