import React from "react";
import {getPlaceProfile, handleModal} from "../../../redux/place-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Preloader from "../../Preloader";
import PlaceProfile from "./PlaceProfile";

class PlaceProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getPlaceProfile(this.props.match.params.placeId)
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
        rate: state.PlacePage.rate,
        isLoading: state.ProfilePage.isLoading,
        showModal: state.PlacePage.showModal
    }
}

export default withRouter(connect(mapStateToProps, {getPlaceProfile, handleModal})(PlaceProfileContainer))
