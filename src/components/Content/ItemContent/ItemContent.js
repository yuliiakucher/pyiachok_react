import React from "react";
import styles from "./ItemContent.module.css";



const ItemContent =() => {
    return(
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
    )
}


export default ItemContent
