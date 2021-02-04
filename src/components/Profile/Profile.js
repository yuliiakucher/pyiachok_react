import React from "react";
import {BrowserRouter, NavLink, Route} from 'react-router-dom'
import styles from "./Profile.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import EditProfileInfo from "./EditProfileInfo/EditProfileInfo";
import default_user from '../media/default-user-image.png'
import Place from "./UserPlaces/Place";
import CreatePlace from "./UserPlaces/CreatePlace/CreatePlace";
import Container from "react-bootstrap/Container";
import AdminPlaceProfileContainer from "./UserPlaces/AdminPlaces/AdminPlaceProfile/AdminPlaceProfileContainer";
import AddNewsForm from "./UserPlaces/AdminPlaces/AdminPlaceProfile/AddNewsForm";
import FavouritePlaces from "./UserPlaces/FavouritePlaces/FavouritePlaces";


const Profile = (props) => {

    console.log('props profile!!!!!!!!!!!!!!!!!!!!!!!',props)

    return (
        <BrowserRouter>
            <div className='d-flex justify-content-center mt-5'>
                <Container id="left-tabs-example">
                    <Row>
                        <Col sm={3}>
                            <div>
                                <img className={styles.img}
                                     src={props.photo ? `http://localhost:8000${props.photo}` : default_user}
                                     alt='avatarka'/>
                                <div>
                                    <h3>{props.first_name}</h3>
                                    <h4>{props.last_name}</h4>
                                </div>
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <NavLink to="/profile">Home</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to="/profile/places">Заведения</NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink to='/profile/fav-places'>Favourite places</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className='mt-5'>
                            <Route exact path="/profile" render={() => <EditProfileInfo {...props}/>}/>
                            <Route exact path="/profile/places" render={() => <Place {...props}/>}/>
                            <Route exact path='/profile/places/create' render={() => <CreatePlace />} />
                            <Route exact path='/profile/places/edit/:placeId' render={() => <AdminPlaceProfileContainer />} />
                            <Route exact path='/profile/fav-places' render={() => <FavouritePlaces />} />
                            <Route exact path='/profile/places/:placeId/add-news' render={() => <AddNewsForm/>}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        </BrowserRouter>

    )

}


export default Profile
