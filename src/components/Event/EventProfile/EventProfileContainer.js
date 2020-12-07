import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {showOneEvent} from "../../../redux/event-reducer";
import Preloader from "../../utilits/Preloader";
import EventProfile from "./EventProfile";
import {compose} from "redux";
import {showMessages} from "../../../redux/chat-reducer";
import {getUserProfile} from "../../../redux/profile-reducer";

function EventProfileContainer(props) {

    const event_id = props.match.params.eventId

    useEffect(() => {
        props.showOneEvent(event_id)
        props.showMessages(event_id)
        props.getUserProfile()

    },[])

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


export default compose(connect(mapStateToProps, {showOneEvent, showMessages, getUserProfile}), withRouter)(EventProfileContainer)
