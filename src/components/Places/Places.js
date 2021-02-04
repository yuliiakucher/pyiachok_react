import React, {useEffect} from "react";
import styles from "./../../App.module.css";
import {getAllPlaces, getTagsInfo} from "../../redux/place-reducer";
import {connect} from "react-redux";
import OnePlace from "./OnePlace/OnePlace";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import Filters from "./Filters";


const Places = ({getAllPlaces, places, totalCount, getTagsInfo, tags, spec, type}) => {

    useEffect(getAllPlaces, [])

    const changePage = (page) => {
        getAllPlaces(null, page)
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
            <Row className='d-flex flex-column align-items-center'>
                <h1 className={styles.name}>Заведения</h1>
            </Row>
            <Row>
                <Col lg={3}>
                    <Filters getTagsInfo={getTagsInfo} spec={spec} tags={tags} type={type} getAllPlaces={getAllPlaces}/>
                </Col>
                <Col>
                    <div className={'d-flex justify-content-center'}>
                        <div>

                            {places.length===0
                                ? <div>'Oops... It seems like there nothing here... '</div>
                                :places.map(place => (
                                <OnePlace
                                    key={place.id}
                                    id={place.id}
                                    name={place.name}
                                    address={place.address}
                                    email={place.email}
                                    type={place.type}
                                    tags={place.tags}
                                    rating={place.rating}

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
        totalCount: state.PlacePage.totalCount,
        tags: state.PlacePage.tags,
        spec: state.PlacePage.spec,
        type: state.PlacePage.type,
    }
}


export default connect(mapStateToProps, {getAllPlaces, getTagsInfo})(Places)
