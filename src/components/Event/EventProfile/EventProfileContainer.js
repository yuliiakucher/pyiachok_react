import React, {useEffect, useLayoutEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {showOneEvent} from "../../../redux/event-reducer";
import Preloader from "../../utilits/Preloader";
import EventProfile from "./EventProfile";
import {compose} from "redux";

function EventProfileContainer(props) {

    console.log(props.isLoading)
    console.log(props.event)
    useLayoutEffect(() => props.showOneEvent(props.match.params.eventId), [])

    return (
        <>
            {props.isLoading
                ? <Preloader/>
                : <EventProfile {...props}/>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        event: state.EventPage.event,
        isLoading: state.LoaderPage.isLoading
    }
}


export default compose(connect(mapStateToProps, {showOneEvent}), withRouter)(EventProfileContainer)
