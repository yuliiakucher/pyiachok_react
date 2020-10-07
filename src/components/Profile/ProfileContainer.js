import React from "react";
import {connect} from "react-redux";
import {editPassword, editUser, showProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Preloader from "../Preloader";


class ProfileContainer extends React.Component {


    componentDidMount() {
        this.props.showProfile()
    }


    render() {
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Profile {...this.props}/>
                }

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
    }
}

export default connect(mapStateToProps, {showProfile,editUser, editPassword})(ProfileContainer)
