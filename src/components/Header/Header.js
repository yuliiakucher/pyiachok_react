import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlassCheers} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {handleShow} from "../../redux/modal-reducer";
import styles from './Header.module.css'
import {logOut} from "../../redux/reauth-reducer";


const Header = (props) => {

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("refresh_token")
        props.logOut(false)
    }

    return (
        <Navbar expand="lg" className='navbar-dark bg-dark'>
            <Navbar.Brand>
                <NavLink to='/' style={{textDecoration: 'none'}} className={styles.title}>
                    <FontAwesomeIcon
                        icon={faGlassCheers}/>
                    пиячок
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="mt-4">
                <Nav className='mx-5 ml-auto'>
                    {!props.isAuth
                        ? <Button onClick={() => {
                            props.handleShow(true)
                        }}>Login</Button>
                        : <div>
                            <NavLink to='/profile' className='mx-2'>
                                <Button>Мой кабинет</Button>
                            </NavLink>
                            <Button onClick={logOut}>Logout</Button>
                        </div>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.ReAuthPage.isAuth,
    }
}

export default connect(mapStateToProps, {handleShow, logOut})(Header)
