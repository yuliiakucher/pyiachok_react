import React from "react";
import styles from "./ProfileSidebar.module.css";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import EditProfileInfo from "../EditProfileInfo/EditProfileInfo";



const ProfileSidebar =() => {
    console.log('LC',localStorage.length)
    return(
        <div>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                <Row>
                    <Col sm={3}>
                        <div>
                            <img className={styles.img} src='https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png'/>
                            <div>
                                <h3>Вася Пупкин</h3>
                                <h4>Владелец</h4>
                            </div>
                        </div>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
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
                                            <EditProfileInfo/>
                                    </div>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Card className={styles.info}>
                                    <div>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </div>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )

}


export default ProfileSidebar
