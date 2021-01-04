import React, {useEffect} from "react";
import EventsItemContent from "./EventsItemContent/EventsItemContent";
import TabContent from "./TabContent/TabContent";
import PlacesItemContent from "./PlacesItemContent/PlacesItemContent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {getTopPlaces} from "../../redux/place-reducer";
import {Col} from "react-bootstrap";


const Content = (props) => {

    const {getTopPlaces, top_places, rate_top} = props

    useEffect(getTopPlaces, [])

    return (
        <Container className='d-flex flex-column justify-content-center'>
            <Row>
                <PlacesItemContent top_places={top_places} rate_top={rate_top}/>
            </Row>
            <Row className='align-self-center'>
                    <TabContent/>
            </Row>
            <Row>
                <EventsItemContent/>
            </Row>
        </Container>
    )
}

let mapStateToProps = (state) => {
    return {
        top_places: state.PlacePage.top_places,
    }
}

export default connect(mapStateToProps, {getTopPlaces})(Content)
