import React from "react";
import {connect} from "react-redux";
import {editPassword, editPhoto, editUser, getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {Redirect} from "react-router-dom";
import {getTagsInfo} from "../../redux/place-reducer";
import Preloader from "../utilits/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.first_name) {
            return <Redirect to={'/'}/>
        }
    }


    render() {
        if (!this.props.isAuth) return <Redirect to={'/'}/>
        return (
            <>{
                !this.props.first_name
                    ? <Preloader/>
                    : <Profile {...this.props}/>
            }</>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        first_name: state.LoginPage.first_name,
        last_name: state.LoginPage.last_name,
        email: state.LoginPage.email,
        photo: state.LoginPage.photo,
        isLoading: state.ProfilePage.isLoading,
        passwordStatusCode: state.ProfilePage.passwordStatusCode,
        profileStatusCode: state.ProfilePage.profileStatusCode,
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant,
        isAuth: state.ReAuthPage.isAuth,
    }
}

export default connect(mapStateToProps, {
    editUser,
    editPassword,
    getTagsInfo,
    getUserProfile,
    editPhoto,
})(ProfileContainer)
