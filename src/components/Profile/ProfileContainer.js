import React from "react";
import {connect} from "react-redux";
import {editPassword, editUser, showProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../Preloader";
import {logOut} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";
import {getTagsInfo} from "../../redux/place-reducer";

class ProfileContainer extends React.Component {


    componentDidMount() {
        this.props.showProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.first_name) {
            return <Redirect to={'/'}/>
        }
    }


    render() {
        if (!this.props.first_name) return <Redirect to={'/'}/>
        return (
            <>
                <Profile {...this.props}/>
            </>

        )

    }
}

let mapStateToProps = (state) => {
    return {
        first_name: state.LoginPage.first_name,
        last_name: state.LoginPage.last_name,
        email: state.LoginPage.email,
        isLoading: state.ProfilePage.isLoading,
        passwordStatusCode: state.ProfilePage.passwordStatusCode,
        profileStatusCode: state.ProfilePage.profileStatusCode,
        alert_text: state.AlertPage.text,
        alert_header: state.AlertPage.header,
        alert_variant: state.AlertPage.variant,
        isAuth: state.LoginPage.isAuth,
    }
}

export default connect(mapStateToProps, {showProfile, editUser, editPassword, getTagsInfo})(ProfileContainer)
