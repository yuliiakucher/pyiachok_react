import React from "react";
import {NavLink} from 'react-router-dom'
import styles from "./Profile.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import EditProfileInfo from "./EditProfileInfo/EditProfileInfo";
import default_user from '../media/default-user-image.png'
import Place from "../Place/Place";
import {BrowserRouter, Route} from "react-router-dom";
import CreatePlace from "../Place/CreatePlace/CreatePlace";
import Container from "react-bootstrap/Container";


class Profile extends React.Component {


    render() {
        // if (!this.props.currentUser) return <Redirect to={'/'}/>
        return (
            <BrowserRouter>
                <div className='d-flex justify-content-center mt-5'>
                    <Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <div>
                                    <img className={styles.img}
                                         src={this.props.photo ? `http://localhost:8000${this.props.photo}` : default_user}
                                         alt='avatarka'/>
                                    <div>
                                        <h3>{this.props.first_name}</h3>
                                        <h4>{this.props.last_name}</h4>
                                    </div>
                                </div>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <NavLink to="/profile">Home</NavLink>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <NavLink to="/profile/places">Заведения</NavLink>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} className='mt-5'>
                                <Route exact path="/profile" render={() => <EditProfileInfo {...this.props}/>}/>
                                <Route exact path="/profile/places" render={() => <Place {...this.props}/>}/>
                                <Route exact path='/profile/places/create' render={() => <CreatePlace/>}/>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </BrowserRouter>

        )

    }
}


export default Profile
