import React from "react";
import styles from "./Profile.module.css";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import EditProfileInfo from "./EditProfileInfo/EditProfileInfo";
import {connect} from "react-redux";
import {editPassword, editUser, showUser} from "../../redux/profile-reducer";
import Place from "../Place/Place";


class Profile extends React.Component {

    componentDidMount() {
        this.props.showUser()
    }

    render() {


        return (
            <div className='d-flex justify-content-center mt-5'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <div>
                                <img className={styles.img}
                                     src='https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png'/>
                                <div>
                                    <h3>{this.props.first_name}</h3>
                                    <h4>{this.props.last_name}</h4>
                                </div>
                            </div>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Информация о профиле</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9} className='mt-5'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Card className={styles.info}>
                                        <div>
                                            {!this.props.isAuth
                                                ? 'wait'
                                                : <EditProfileInfo {...this.props}/>
                                            }
                                        </div>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Card className={styles.info}>
                                        <Place/>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )

    }
}

let mapStateToProps = (state) => {
    return {
        first_name: state.ProfilePage.first_name,
        last_name: state.ProfilePage.last_name,
        email: state.ProfilePage.email,
        isAuth: state.ProfilePage.isAuth,
        passwordStatusCode: state.ProfilePage.passwordStatusCode,
    }
}

export default connect(mapStateToProps, {showUser, editUser, editPassword})(Profile)
