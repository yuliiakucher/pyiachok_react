import React from "react";
import {ListGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarAlt,
    faCrosshairs,
    faHryvnia,
    faUsers,
    faVenusMars,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import {NavLink, withRouter} from "react-router-dom";

const OneEvent = ({event, location}) => {

    const {id, date, purpose, sex, number_of_people, payer, expenditures} = event
    const new_date = new Date()
    return <ListGroup.Item>
        <p><FontAwesomeIcon icon={faCalendarAlt}/> Когда:{new_date.toDateString(date)}</p>
        <p><FontAwesomeIcon icon={faCrosshairs}/> Зачем: {purpose}</p>
        <p><FontAwesomeIcon icon={faUsers}/> Сколько людей: {number_of_people}</p>
        <p><FontAwesomeIcon icon={faVenusMars}/> Какого пола: {sex}</p>
        <p><FontAwesomeIcon icon={faWallet}/> Кто будет платить: {payer}</p>
        <p><FontAwesomeIcon icon={faHryvnia}/> Сколько потратим: {expenditures}</p>
        {location.pathname && location.pathname.search('places') !== -1
        && <NavLink to={`/event/${id}`} style={{color: '#4bbf74'}}>See details...</NavLink>}
    </ListGroup.Item>
}

export default withRouter(OneEvent)
