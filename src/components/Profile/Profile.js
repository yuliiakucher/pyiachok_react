import React, {useReducer} from "react";
import styles from './Profile.module.css'
import ItemContent from "../Content/ItemContent/ItemContent";
import TabContent from "../Content/ItemContent/TabContent/TabContent";
import ProfileSidebar from "./ProfileSidebar/ProfileSidebar";


const Profile = () => {
    return (
        <div className="d-flex justify-content-center">
            <ProfileSidebar/>
        </div>
    )
}

export default Profile
