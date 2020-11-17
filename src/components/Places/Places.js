import React, {useEffect} from "react";
import styles from "./Places.module.css";
import {getAllPlaces} from "../../redux/place-reducer";
import {connect} from "react-redux";
import OnePlace from "./OnePlace/OnePlace";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";


const Places = ({getAllPlaces, places, totalCount}) => {

    useEffect(() => {
        getAllPlaces()
    }, [])

    const changePage = (page) => {
        getAllPlaces(page)
        window.scrollTo(0, 0)
    }

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
                        <div>
                            <div className='d-flex flex-column align-content-center'>
                                <h4 className={styles.name}>Заведения</h4>
                            </div>
                            {places.map(place => (
                                <OnePlace
                                    key={place.id}
                                    id={place.id}
                                    name={place.name}
                                    adress={place.address}
                                    email={place.email}
                                    type={place.type}

                                />
                            ))}
                            <Paginator
                                className='d-flex'
                                totalCount={totalCount}
                                changePage={changePage}/>
                        </div>
                    </div>

                </Col>
            </Row>

        </Container>


    )
}

let mapStateToProps = (state) => {
    return {
        places: state.PlacePage.places,
        totalCount: state.PlacePage.totalCount
    }
}


export default connect(mapStateToProps, {getAllPlaces})(Places)
