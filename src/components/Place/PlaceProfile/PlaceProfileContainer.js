import React, {useEffect} from "react";
import {getPlaceProfile, handleModal} from "../../../redux/place-reducer";
import {connect} from "react-redux";
import {NavLink, withRouter} from "react-router-dom";
import styles from './PlaceProfile.module.css'
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Preloader from "../../Preloader";
import PlaceProfile from "./PlaceProfile";

class PlaceProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getPlaceProfile(this.props.match.params.placeId)
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                {this.props.isLoading ? <Preloader/> :
                    <PlaceProfile {...this.props}/>
                }

            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        place: state.PlacePage.place,
        isLoading: state.ProfilePage.isLoading,
        showModal: state.PlacePage.showModal
    }
}

export default withRouter(connect(mapStateToProps, {getPlaceProfile, handleModal})(PlaceProfileContainer))
