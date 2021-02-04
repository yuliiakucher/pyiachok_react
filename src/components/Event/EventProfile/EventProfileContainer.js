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
    const [showOneEvent, showMessages, getUserProfile] = props

    useEffect(() => {
        showOneEvent(event_id)
        showMessages(event_id)
        getUserProfile()

    },[event_id, getUserProfile, showMessages, showOneEvent])

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
