import React from "react";
import styles from './Content.module.css'
import EventsItemContent from "./EventsItemContent/EventsItemContent";
import TabContent from "./TabContent/TabContent";
import PlacesItemContent from "./PlacesItemContent/PlacesItemContent";

const Content = () => {
    return (
        <div className={styles.page_container}>
            <PlacesItemContent/>
            <TabContent/>
            <EventsItemContent/>

        </div>

    )
}

export default Content
