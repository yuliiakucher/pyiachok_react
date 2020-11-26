import React, {useState} from "react";
import styles from "./../../../App.module.css";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import {url} from "../../../utilits/utilits";
import default_photo from './../../media/place.jpg'
import Carousel from "react-bootstrap/Carousel";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Stars from "../../utilits/Stars";


const PlacesItemContent = ({top_places, rate_top}) => {

    const all = 10
    const visible = 5
    const arr = []
    for (let i = 1; i <= all / visible; i++) {
        arr.push(i)
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Card className='my-2'>
            <Card.Header>
                <h1 className={styles.name}>Топ заведений</h1>
            </Card.Header>


            <Carousel prevIcon={<p style={{fontSize: '70px', color: 'black'}}>{'←\t'}</p>}
                      nextIcon={<p style={{fontSize: '70px', color: 'black'}}>{'→'}</p>}
                      activeIndex={index} onSelect={handleSelect}
            >
                {
                    arr.map(item => (
                        <Carousel.Item interval={5000000}>
                            <div className='d-flex flex-row'>
                                {top_places.filter((place, index) => (item === 1 ? index < visible : index >= visible))
                                    .map(place => {

                                            return <Card key={place.id} className='mx-2'>
                                                <NavLink
                                                    to={`places/place/${place.id}`}
                                                    style={{textDecoration: 'none'}}
                                                >
                                                    <Card.Img style={{objectFit: 'cover', width: '200px', height: '200px'}}
                                                              src={place.photos[0]
                                                                  ? url + place.photos[0].photo
                                                                  : default_photo}/>
                                                    <Card.Body>
                                                        <Card.Title>
                                                            <h6 className={styles.link}>{place.name}</h6>
                                                        </Card.Title>
                                                        <Card.Subtitle className={'d-flex flex-row'}>
                                                            <Stars rating={place.rating}/>
                                                        </Card.Subtitle>
                                                    </Card.Body>
                                                </NavLink>
                                            </Card>

                                        }
                                    )}
                            </div>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
            <Card.Footer>
                <NavLink style={{textDecoration: 'none', fontSize: '20px'}} to='/places' className={styles.link}>Смотреть
                    все заведения...</NavLink>
            </Card.Footer>
        </Card>
    )
}


export default PlacesItemContent
