import React, {useEffect} from "react";

import styles from "./Places.module.css";
import {getAllPosts} from "../../redux/place-reducer";
import {connect} from "react-redux";
import OnePlace from "./OnePlace/OnePlace";



const Places = ({getAllPosts, places}) => {

    useEffect(()=> {
        getAllPosts()
    }, [])

    return (
        <div className={'d-flex justify-content-center'}>
            <div className={styles.wrapper}>
                <div className={styles.subwrapper_top}>
                    <h4 className={styles.name}>Заведения</h4>
                    {places.map(place => (
                        <OnePlace
                            name={place.name}
                            adress={place.address}
                            email={place.email}

                        />
                    ))}
                </div>

            </div>
        </div>

    )
}

let mapStateToProps = (state) => {
    return{
        places: state.PlacePage.places
    }
}


export default connect(mapStateToProps, {getAllPosts})(Places)
