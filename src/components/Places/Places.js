import React, {useEffect} from "react";
import styles from "./../../App.module.css";
import {getAllPlaces, getPlaceByName, getTagsInfo} from "../../redux/place-reducer";
import {connect, useDispatch} from "react-redux";
import OnePlace from "./OnePlace/OnePlace";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import Filters from "./Filters";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import useForm from "../utilits/useForm";
import {validate} from "../utilits/validationSearchForm";


const Places = ({getAllPlaces, places, totalCount, getTagsInfo, tags, spec, type}) => {

    useEffect(getAllPlaces, [])

    const dispatch = useDispatch()

    const {handleChange, handleSubmit, values} = useForm(onSubmit, validate)

    function onSubmit() {
        dispatch(getPlaceByName(values.search))
    }

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


            <Row>
                <Col lg={3}>
                    <Filters getTagsInfo={getTagsInfo} spec={spec} tags={tags} type={type} getAllPlaces={getAllPlaces}/>
                </Col>
                <Col>
                    <Row className='d-flex flex-row justify-content-around'>

                        <h1 className={styles.name}>Заведения</h1>

                        <Form className='d-flex flex-row align-items-center'>
                            <FormControl
                                onChange={handleChange}
                                type="text"
                                name='search'
                                value={values.search || ''}
                                placeholder="Search"
                                className="mr-2"/>
                            <Button onClick={() => handleSubmit()} variant="outline-success">
                                <FontAwesomeIcon icon={faSearch}/>
                            </Button>
                        </Form>


                    </Row>
                    <div className={'d-flex justify-content-center'}>
                        <div>
                            {places.length === 0
                                ? <div>'Oops... It seems like there nothing here... '</div>
                                : places.map(place => (
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
