import React, {useReducer} from "react";
import styles from './Profile.module.css'
import EventsItemContent from "../Content/EventsItemContent/EventsItemContent";
import TabContent from "../Content/TabContent/TabContent";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";


const Profile = () => {
    return (
        <div className="d-flex justify-content-center">
            <ProfileSidebar/>
        </div>
    )
}

export default Profile
