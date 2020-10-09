import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'


const SideNavbar = (props) => {
    return (
        <Navbar>
            <Nav defaultActiveKey="/profile" className="flex-column">
                <Nav.Link href='/profile/edit'>Home</Nav.Link>
                <Nav.Link href='/profile/place/create'>Home</Nav.Link>
            </Nav>

        </Navbar>
    )
}

export default SideNavbar
