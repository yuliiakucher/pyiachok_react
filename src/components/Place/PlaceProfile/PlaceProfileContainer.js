import React from "react";
import {getPlaceProfile, handleModal} from "../../../redux/place-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../utilits/Preloader";
import PlaceProfile from "./PlaceProfile";
import {createComment, getAllComments} from "../../../redux/comment-reducer";
import {showEventsByPlace} from "../../../redux/event-reducer";
import {getUserProfile} from "../../../redux/profile-reducer";

class PlaceProfileContainer extends React.Component {

    componentDidMount() {
        const place_id = this.props.match.params.placeId
        this.props.getPlaceProfile(place_id)
        this.props.showEventsByPlace(place_id)
        this.props.getUserProfile()
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                {this.props.isLoading || !this.props.place.id ? <Preloader/> :
                    <PlaceProfile {...this.props}/>
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        place: state.PlacePage.place,
        userId: state.LoginPage.id,
        isLoading: state.ProfilePage.isLoading,
        showModal: state.PlacePage.showModal,
        comments: state.CommentPage.comments,
        events: state.EventPage.events
    }
}

export default withRouter(connect(mapStateToProps, {
    getPlaceProfile,
    handleModal,
    getAllComments,
    createComment,
    showEventsByPlace,
    getUserProfile
})(PlaceProfileContainer))
