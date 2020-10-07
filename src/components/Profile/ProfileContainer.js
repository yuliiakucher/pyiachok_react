import React, {useEffect} from "react";
import styles from "./Profile.module.css";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import EditProfileInfo from "./EditProfileInfo/EditProfileInfo";
import {connect} from "react-redux";
import {editPassword, editUser, showUser} from "../../redux/profile-reducer";
import Place from "../Place/Place";
import Profile from "./Profile";
import Preloader from "../Preloader";


class ProfileContainer extends React.Component {




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
    }
}

export default connect(mapStateToProps, {editUser, editPassword})(ProfileContainer)
