import React, {useEffect} from "react";

import styles from "./Places.module.css";
import {getAllPlaces} from "../../redux/place-reducer";
import {connect} from "react-redux";
import OnePlace from "./OnePlace/OnePlace";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {NavLink} from "react-router-dom";


const Places = ({getAllPlaces, places}) => {

    useEffect(() => {
        getAllPlaces()
    }, [])

    return (
        <Container>
            <ol className={'m-2 breadcrumb'}>
                <li className={'breadcrumb-item'} to={'/'}>
                    <NavLink to={'/'}> Домой </NavLink>
                </li>
                <li className={'breadcrumb-item active'}>Заведения</li>
            </ol>
            <Row>
                <Col lg={1}>
                    <div>Filters</div>
                </Col>
                <Col>
                    <div className={'d-flex justify-content-center'}>
                        <div className={styles.wrapper}>
                            <div className={styles.subwrapper_top}>
                                <h4 className={styles.name}>Заведения</h4>
                                {places.map(place => (
                                    <OnePlace
                                        key={place.id}
                                        id={place.id}
                                        name={place.name}
                                        adress={place.address}
                                        email={place.email}

                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </Col>
            </Row>

        </Container>


    )
}

let mapStateToProps = (state) => {
    return {
        places: state.PlacePage.places
    }
}


export default connect(mapStateToProps, {getAllPlaces})(Places)
