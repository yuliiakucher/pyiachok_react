import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import default_user from "../../../media/default-user-image.png";

const News = ({news}) => {

    console.log(news)
    return (
        <Container className='mt-4'>
            {news && news.map(n => {
                return <Card key={n.id}>
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <Card.Img style={{objectFit: 'cover', width: '150px', height: '200px'}}
                                          src={n.photo ? `http://localhost:8000${n.photo}` : default_user}/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>{n.name}</Card.Title>
                                    <Card.Text>{n.text}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            })}
        </Container>
    );
};

export default News;
