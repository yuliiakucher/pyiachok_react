import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";
import styles from "./TabContent.module.css";
import CustomMap from "../../../CustomMap/CustomMap";

const TabContent = () => {
    return (
        <div className={styles.users_wrapper}>
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
            </Tabs>
        </div>


    )
}

export default TabContent


