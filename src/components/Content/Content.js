import React from "react";
import styles from './Content.module.css'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Content = () => {
    return (
        <div className={styles.page_container}>
            <div className={styles.users_wrapper}>
                <div className={styles.subwrapper_center}>
                    <h4 className={styles.name}>Топ закладів</h4>
                </div>
                <div className={styles.subwrapper_right}>
                    <div className={styles.icon}>
                    </div>
                    <p>{'user.location.country'}</p>
                    <p>{'user.location.city'}</p>
                </div>
            </div>
            <div className={styles.users_wrapper_center}>
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
            <div className={styles.users_wrapper}>
                <div className={styles.subwrapper_left}/>
                <div className={styles.subwrapper_center}>
                    <h4 className={styles.name}>Топ закладів</h4>
                </div>
                <div className={styles.subwrapper_right}>
                    <div className={styles.icon}>
                    </div>
                    <p>{'user.location.country'}</p>
                    <p>{'user.location.city'}</p>
                </div>
            </div>

        </div>

    )
}

export default Content
