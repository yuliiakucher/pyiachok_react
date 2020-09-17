import React from "react";
import styles from './Content.module.css'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ItemContent from "./ItemContent/ItemContent";
import TabContent from "./ItemContent/TabContent/TabContent";

const Content = () => {
    return (
        <div className={styles.page_container}>
            <ItemContent/>
            <TabContent/>
            <ItemContent/>

        </div>

    )
}

export default Content
