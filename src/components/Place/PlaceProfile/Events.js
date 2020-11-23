import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import styles from '../../../App.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faCrosshairs, faUsers, faVenusMars, faWallet, faHryvnia} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

const Events = ({events}) => {

    return (
        <Card>
            <Card.Body>
                <Card.Title><h4 className={styles.name}>Пиячки</h4></Card.Title>
                <ListGroup variant="flush">
                    {events.map(event => {
                        const {id, date, purpose, sex, number_of_people, payer, expenditures} = event
                        const new_date = new Date()
                        return <ListGroup.Item key={id}>
                            <p><FontAwesomeIcon icon={faCalendarAlt}/> Когда:{new_date.toDateString(date)}</p>
                            <p><FontAwesomeIcon icon={faCrosshairs}/> Зачем: {purpose}</p>
                            <p><FontAwesomeIcon icon={faUsers}/> Сколько людей: {number_of_people}</p>
                            <p><FontAwesomeIcon icon={faVenusMars}/> Какого пола: {sex}</p>
                            <p><FontAwesomeIcon icon={faWallet}/> Кто будет платить: {payer}</p>
                            <p><FontAwesomeIcon icon={faHryvnia}/> Сколько потратим: {expenditures}</p>
                            <NavLink to={`/event/${id}`}>See details...</NavLink>
                        </ListGroup.Item>
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default Events
