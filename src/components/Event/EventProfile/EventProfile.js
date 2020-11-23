import React from "react";
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const EventProfile = () => {
    return(
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
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/places'}>
                        place name
                    </NavLink>
                </li>
                <li className={'breadcrumb-item active'}>{}</li>
            </ol>
        </Container>
    )
}

export default EventProfile
