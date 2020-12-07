import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import default_user from "../../media/default-user-image.png";
import Image from "react-bootstrap/Image";
import styles from './Message.module.css'

const MessageLeft = ({text, date, users,}) => {

    const new_date = new Date(date)

    return (
        <Card className='my-2' style={{border: 'none'}}>
            <Container>
                <Row className='d-flex flex-row align-items-center'>
                    <Col lg={2} className='d-flex flex-column align-items-center m-2'>
                        <Row >
                            <Image  style={{width: '40px', height: '40px', objectFit: 'cover'}} roundedCircle
                                   src={users && users.profile.photo
                                       ? `http://localhost:8000${users.profile.photo}`
                                       : default_user}/>
                        </Row>
                        <Row className={styles.userName}>
                            {users.first_name}
                        </Row>
                    </Col>
                    <Col>
                        <Row className={styles.block} style={{background: '#939aa0'}}>
                            {text}
                        </Row>
                        <Row className={styles.date}>
                            {new_date.toDateString()}
                        </Row>
                    </Col>
                </Row>

            </Container>
        </Card>
    )
}
export default MessageLeft
