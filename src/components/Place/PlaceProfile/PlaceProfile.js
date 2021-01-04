import React, {useEffect} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from '../../../App.module.css'
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Preloader from "../../utilits/Preloader";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faClock,
    faCheck,
    faGlassCheers, faHeart,
} from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHeartOutlined} from '@fortawesome/free-regular-svg-icons'
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import MapModal from "./MapModal/MapModal";
import Comments from "./Comments/Comments";
import {Col, ListGroup, Row, Tooltip} from "react-bootstrap";
import Events from "../../Event/Events";
import Stars from "../../utilits/Stars";
import {PlaceAPI} from "../../api/api";

const PlaceProfile = ({
                          place, getAllComments, isLoading, showModal,
                          handleModal, match, comments, createComment,
                          events, userId, getPlaceProfile, getCommentForEdit,
                          comment, editComment
                      }) => {

    const {id, name, address, photos, contacts, email, type, tags, specificities, schedule, coordinates, rating, fav} = place
    const arr = []
    const date = new Date().getDay()
    let new_date;
    for (const [key, value] of Object.entries(schedule)) {
        arr.push(value)
    }

    new_date = ''
    arr.map((i, inx) => {
        if (inx === date) {
            new_date = i
        }
    })
    useEffect(() => getAllComments(match.params.placeId), [])

    let isFav = false
    fav.filter(i => {
        if (i === userId) {
            isFav = true
        }
    })
    const addToFav = () => {
        PlaceAPI.addToFav(id)
            .then(getPlaceProfile(id))
    }

    const deleteFromFav = () => {
        PlaceAPI.deleteFromFav(id)
            .then(getPlaceProfile(id))
    }

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
            {isLoading ? <Preloader/> : null}
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

                <Row className={'d-flex justify-content-center'}>
                    <Container className='d-flex flex-column'>
                        <h1 className={styles.name}>{name}
                            <Badge variant="info" className='m-2'>{type.type_name}</Badge>
                            {isFav
                                ? <OverlayTrigger
                                    key='1'
                                    placement='bottom'
                                    overlay={<Tooltip id={`tooltip-1`}>Delete from favourites</Tooltip>}>
                                    <FontAwesomeIcon
                                        onClick={deleteFromFav}
                                        style={{color: '#4bbf74'}}
                                        icon={faHeart}/>
                                </OverlayTrigger>
                                : <OverlayTrigger
                                    key='2'
                                    placement='bottom'
                                    overlay={<Tooltip id={`tooltip-2`}>Add to favourites</Tooltip>}>
                                    <FontAwesomeIcon
                                        onClick={addToFav}
                                        style={{color: '#4bbf74'}}
                                        icon={faHeartOutlined}/>
                                </OverlayTrigger>
                            }
                        </h1>
                        <Row>
                            <Col>
                                <Row>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item className='d-flex flex-row'>
                                            <Stars rating={rating}/>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <FontAwesomeIcon icon={faMapMarkerAlt}/> Адрес: {address}
                                            <Button
                                                className='mx-1'
                                                variant="outline-info"
                                                size="sm"
                                                onClick={() => handleModal(true)}>
                                                Посмотреть на карте</Button>
                                        </ListGroup.Item>
                                        <MapModal
                                            handleModal={handleModal}
                                            show={showModal}
                                            coordinates={coordinates}
                                        />
                                        <ListGroup.Item>
                                            <FontAwesomeIcon icon={faPhoneAlt}/> Контакты: {contacts}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <FontAwesomeIcon icon={faEnvelope}/> {email}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <FontAwesomeIcon icon={faClock}/> Сегодня: {new_date}
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <Button className='mx-1' variant="outline-info" size="sm">Посмотреть
                                                    график
                                                    работы</Button>
                                            </OverlayTrigger>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Row>


                                <Row>
                                    <div className='m-3'>
                                        <h6 className={styles.name}>Особенности</h6>
                                        {specificities.map(spec => (
                                            <div className='my-1'>
                                                <FontAwesomeIcon icon={faCheck}/>
                                                {spec.specificity_name}
                                            </div>
                                        ))}
                                    </div>

                                    <div className='m-3'>
                                        <h6 className={styles.name}>Специальные предложения</h6>

                                        {tags.map(tag => (
                                            <div className='my-1'>
                                                <FontAwesomeIcon icon={faCheck}/>{tag.tag_name}
                                            </div>
                                        ))}
                                    </div>
                                </Row>

                            </Col>
                            <Col lg={2}>
                                <NavLink to={`/places/place/${id}/create-event`} className={'align-self-end'}>
                                    <Button className='d-inline-block'><FontAwesomeIcon
                                        icon={faGlassCheers}/>Создать пиячок</Button>
                                </NavLink>
                            </Col>
                            <Col lg={5}>
                                <Events events={events}/>
                            </Col>
                        </Row>

                        <p>Фотографии</p>

                        <Comments
                            userId={userId}
                            comments={comments}
                            comment={comment}
                            placeId={match.params.placeId}
                            createComment={createComment}
                            getCommentForEdit={getCommentForEdit}
                            editComment={editComment}
                        />
                    </Container>
                </Row>
            </Container>
        </>

    )
}


export default withRouter(PlaceProfile)
