import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";


const Header = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("refresh_token")
        props.logOut()

    }

    return (
        <Navbar expand="lg" className='navbar-dark bg-dark'>
            <Navbar.Brand>
                <NavLink to='/'>
                    Пиячок
                </NavLink>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">
                            <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                    </Form>
                </Nav>
                <Nav className='mx-5'>
                    {!props.email
                        ? <Button onClick={() => {
                            props.handleShow(true)
                        }}>Login</Button>
                        : <div>
                            <NavLink to='/profile' className='mx-2'>
                                <Button>Мой кабинет, {props.email}</Button>
                            </NavLink>
                            <Button onClick={logOut}>Logout</Button>
                        </div>

                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
