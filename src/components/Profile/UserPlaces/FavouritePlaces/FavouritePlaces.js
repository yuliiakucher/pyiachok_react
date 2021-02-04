import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFavPlaces} from "../../../../redux/profile-reducer";
import {NavLink, useHistory} from "react-router-dom";
import {Nav, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'


const FavouritePlaces = () => {

    const dispatch = useDispatch()
    const fav_places = useSelector(store => store.ProfilePage.fav_places)

    useEffect(() => {
        dispatch(getFavPlaces())
    }, [dispatch])

    const history = useHistory()

    const handleClick = (place_id) => {
        history.push(`/places/place/${place_id}`)
        window.location.reload()
    }


    return (
        <Container>
            <Row>
                <ol className={'m-2 breadcrumb'}>
                    <li className={'breadcrumb-item'}>
                        <NavLink to={'/profile'}>
                            Home
                        </NavLink>
                    </li>
                    <li className={'breadcrumb-item active'}>fav-places</li>
                </ol>
            </Row>
            <Row>
                <Nav className={'flex-column'}>
                    {fav_places.map(place => (
                        <Nav.Item key={place.id}>
                            <Nav.Link onClick={() => {
                                handleClick(place.id)
                            }}>
                                <FontAwesomeIcon icon={faHeart} className='mr-3'/>{place.name}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Row>
        </Container>
    )
}

export default FavouritePlaces
