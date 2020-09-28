import React from "react";

import styles from "./PlacesItemContent.module.css";



const PlacesItemContent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.subwrapper_top}>
                <h4 className={styles.name}>Топ закладів</h4>
            </div>
            <div className={styles.subwrapper_bottom}>
                <div>
                    <a href='/places'>Смотреть все заведения...</a>
                </div>
            </div>
        </div>
    )
}


export default PlacesItemContent
