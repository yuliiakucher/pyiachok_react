import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import News from "./News/News";
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../../redux/news-reducer";
import {Container} from "react-bootstrap";

const TabContent = () => {

    const dispatch = useDispatch()
    const news = useSelector(state=> state.NewsPage.news)
    console.log(news)

    const [key, setKey] = useState('news');
    useEffect(()=> {dispatch(getNews(key))},[])

    const handleClick = (k) => {
        setKey(k)
        dispatch(getNews(k))
    }

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Tabs
                        id="controlled-tab"
                        activeKey={key}
                        onSelect={handleClick}>
                        <Tab eventKey="news" title="News">
                            <News news={news}/>
                        </Tab>
                        <Tab eventKey="event" title="Events">
                            <News news={news}/>
                        </Tab>
                        <Tab eventKey="promotion" title="Promotions">
                            <News news={news}/>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default TabContent


