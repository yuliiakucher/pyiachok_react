import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import styles from "./TabContent.module.css";
import Card from "react-bootstrap/Card";

const TabContent = () => {
    return (
        <Card className={styles.wrapper}>
            <Card.Body>
                <Tabs defaultActiveKey="news" id="uncontrolled-tab-example">
                <Tab eventKey="news" title="Новини">
                    Новини
                </Tab>
                <Tab eventKey="events" title="Події">
                    Події
                </Tab>
                <Tab eventKey="sales" title="Акції">
                    Акції
                </Tab>
            </Tabs></Card.Body>
        </Card>
    )
}

export default TabContent


