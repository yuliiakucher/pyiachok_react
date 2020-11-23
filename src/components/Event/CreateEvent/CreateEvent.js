import React from "react";
import {connect} from "react-redux";
import style from './CreateEvent.module.css'
import CreateEventForm from "./CreateEventForm";
import {NavLink, withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Card, Row} from "react-bootstrap";
import {createEvent} from "../../../redux/event-reducer";

const CreateEvent = (props) => {
    const place_id = props.match.params.placeId
    return (
        <Container>
            <ol className={'m-2 breadcrumb'}>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/'}>
                        Домой
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/places'}>
                        Заведения
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={`/places/place/${place_id}`}>
                        {props.place_name}
                    </NavLink>
                </li>
                <li className={'breadcrumb-item active'}>Create event</li>
            </ol>
            <Row className='d-flex flex-column align-items-center'>
                <Card className={style.wrapper}>
                    <h1>Создать пиячок</h1>
                    <CreateEventForm id={place_id} {...props}/>
                </Card>
            </Row>

        </Container>


    )
}

let mapStateToProps = (state) => {
    return {
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant,
        place_name: state.PlacePage.place.name,
    }
}

export default connect(mapStateToProps, {createEvent})(withRouter(CreateEvent))
