import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import News from "./News/News";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../redux/news-reducer";
import {CardGroup, Container} from "react-bootstrap";

const TabContent = () => {

    const dispatch = useDispatch()
    const news = useSelector(state => state.NewsPage.news)

    const [key, setKey] = useState('news');
    useEffect(() => {
        dispatch(getNews(key))
    }, [dispatch,key])

    const handleClick = (k) => {
        setKey(k)
        dispatch(getNews(k))
    }

    const tabs_names = [
        {eventKey: 'news', title: 'News'},
        {eventKey: 'event', title: 'Events'},
        {eventKey: 'promotion', title: 'Promotions'},
    ]

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Tabs
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={handleClick}>
                        {tabs_names.map((tab_name, index) => (
                                <Tab key={index} eventKey={tab_name.eventKey} title={tab_name.title} className='mt-5'>
                                    <CardGroup>
                                        <News news={news}/>
                                    </CardGroup>
                                </Tab>
                            ))}
                    </Tabs>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default TabContent


