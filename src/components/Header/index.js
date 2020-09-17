import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './style.css'


const Header = (props) => {


    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                    <Button onClick={() => {props.handleShow(true)}}>Login</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
