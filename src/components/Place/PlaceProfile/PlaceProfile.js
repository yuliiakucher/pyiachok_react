import React from "react";

import {NavLink} from "react-router-dom";
import styles from './PlaceProfile.module.css'
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Preloader from "../../Preloader";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faClock,
    faCheck,
    faGlassCheers
} from '@fortawesome/free-solid-svg-icons'
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import MapModal from "./MapModal/MapModal";


const PlaceProfile = (props) => {
    const {id, name, address, photos, contacts, email, type, tags, specificities, schedule, coordinates} = props.place
    const arr = []
    const date = new Date().getDay()
    let new_date;
    for (const [key, value] of Object.entries(schedule)) {
        arr.push(value)
    }
    arr.map((i, inx) => {
        if (inx === date) {
            new_date = i
        }
    })

    console.log(tags)
    console.log(specificities)


    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Часы работы</Popover.Title>
            <Popover.Content>
                <div>Понедельник {schedule.monday}</div>
                <div>Вторник {schedule.tuesday}</div>
                <div>Среда {schedule.wednesday}</div>
                <div>Четверг {schedule.thursday}</div>
                <div>Пятница {schedule.friday}</div>
                <div>Суббота {schedule.saturday}</div>
                <div>Воскресенье {schedule.sunday}</div>
            </Popover.Content>
        </Popover>
    );
    return (
        <>
            {props.isLoading ? <Preloader/> : null}
            <Container>
                <ol className={'m-2 breadcrumb'}>
                    <li className={'breadcrumb-item'}>
                        <NavLink to={'/'}>
                            Домой
                        </NavLink>
                    </li>
                    <li className={'breadcrumb-item'}>
                        <NavLink to={'/places'}>
                            Заведения
                        </NavLink>
                    </li>
                    <li className={'breadcrumb-item active'}>{name}</li>
                </ol>
                <div className={'d-flex justify-content-center'}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.name}>{name}
                            <Badge variant="info"
                                   className='m-2'>{type.type_name}</Badge>

                        </h1>
                        <NavLink to={`/places/place/${id}/create-event`} className={'align-self-end'}>
                            <Button size='lg' variant='primary' ><FontAwesomeIcon
                                icon={faGlassCheers}/>Создать пиячок</Button>
                        </NavLink>

                        <div>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>Адрес: {address}
                            <Button
                                className='mx-1'
                                variant="outline-info"
                                size="sm"
                                onClick={() => props.handleModal(true)}>
                                Посмотреть на карте</Button>
                            <MapModal
                                handleModal={props.handleModal}
                                show={props.showModal}
                                coordinates={coordinates}
                            />
                        </div>
                        <p>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            Контакты: {contacts}</p>
                        <p><FontAwesomeIcon icon={faEnvelope}/> {email}</p>
                        <p>
                            <FontAwesomeIcon icon={faClock}/>
                            Сегодня: {new_date}

                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button className='mx-1' variant="outline-info" size="sm">Посмотреть график
                                    работы</Button>
                            </OverlayTrigger>

                            <div className='d-flex row m-3'>
                                <div className='m-3'>
                                    <h4 className={styles.name}>Особенности</h4>
                                    {specificities.map(spec => (
                                        <div className='my-1'>
                                            <FontAwesomeIcon icon={faCheck}/>
                                            {spec.specificity_name}
                                        </div>
                                    ))}
                                </div>

                                <div className='m-3'>
                                    <h4 className={styles.name}>Специальные предложения</h4>

                                    {tags.map(tag => (
                                        <div className='my-1'>
                                            <FontAwesomeIcon icon={faCheck}/>{tag.tag_name}
                                        </div>
                                    ))}
                                </div>

                            </div>


                        </p>
                        <p>Фотографии</p>
                    </div>
                </div>
            </Container>
        </>

    )
}


export default PlaceProfile
