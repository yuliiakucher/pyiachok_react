import React from 'react';
import Container from "react-bootstrap/Container";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const NewsPage = () => {

    const news = useSelector(store => store.NewsPage.news)

    return (
        <Container>
            <ol className={'m-2 breadcrumb'}>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/'}>
                        Home
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={'/places'}>
                        Places
                    </NavLink>
                </li>
                <li className={'breadcrumb-item'}>
                    <NavLink to={`/places/11`}>
                        Places
                    </NavLink>
                </li>
                <li className={'breadcrumb-item active'}></li>
            </ol>
        </Container>
    );
};

export default NewsPage;
