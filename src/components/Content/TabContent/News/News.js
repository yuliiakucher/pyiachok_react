import React from 'react';
import {Card} from "react-bootstrap";
import default_user from "../../../media/default-user-image.png";

const News = ({news}) => {
    return (
        <>
            {news && news.map(n => {
                return <Card key={n.id} border='light'>
                    <Card.Img style={{objectFit: 'cover', width: '300px', height: '200px'}}
                              src={n.photo ? `http://localhost:8000${n.photo}` : default_user}/>

                    <Card.Body>
                        <Card.Title>{n.name}</Card.Title>
                        <Card.Text
                            style={{objectFit: 'cover', width: '300px', height: '100px', overflow: 'hidden '}}>
                            {n.text}</Card.Text>
                    </Card.Body>

                </Card>
            })
            }
        </>
    )
        ;
};

export default News;
