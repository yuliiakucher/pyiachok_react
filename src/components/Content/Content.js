import React from "react";
import styles from './Content.module.css'
import EventsItemContent from "./EventsItemContent/EventsItemContent";
import TabContent from "./TabContent/TabContent";
import PlacesItemContent from "./PlacesItemContent/PlacesItemContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <PlacesItemContent/>
                </Col>
                <Col md={6}>
                    <TabContent/>
                </Col>
                <Col md={3}>
                    <EventsItemContent/>
                </Col>
            </Row>


        </Container>
    )
}

export default Content
