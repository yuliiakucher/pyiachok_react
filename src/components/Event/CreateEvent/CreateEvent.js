import React from "react";
import style from './CreateEvent.module.css'
import CreateEventForm from "./CreateEventForm";
import {withRouter} from "react-router-dom";

const CreateEvent = (props) => {
    return (
        <div className='d-flex flex-row justify-content-center '>
            <div className={style.wrapper}>
                <h1>Создать пиячок</h1>
                <CreateEventForm id={props.match.params.placeId}/>
            </div>
        </div>


    )
}

export default withRouter(CreateEvent)
