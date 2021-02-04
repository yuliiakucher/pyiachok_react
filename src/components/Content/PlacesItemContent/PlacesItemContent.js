import React from "react";
import styles from "./../../../App.module.css";
import Card from "react-bootstrap/Card";
import {NavLink} from "react-router-dom";
import {url} from "../../../utilits/utilits";
import default_photo from './../../media/place.jpg'
import Carousel from "react-multi-carousel";
import Stars from "../../utilits/Stars";
import "react-multi-carousel/lib/styles.css";


const PlacesItemContent = ({top_places}) => {


    return (
        <Card className='my-2'>
            <Card.Header>
                <h1 className={styles.name}>Топ заведений</h1>
            </Card.Header>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {top_places
                    .map(place => {

                            return <Card key={place.id} className='mx-2' border='light'>
                                <NavLink
                                    to={`places/place/${place.id}`}
                                    style={{textDecoration: 'none'}}
                                >
                                    <Card.Img style={{objectFit: 'cover', width: '250px', height: '250px'}}
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


            </Carousel>



            <Card.Footer>
                <NavLink style={{textDecoration: 'none', fontSize: '20px'}} to='/places' className={styles.link}>Смотреть
                    все заведения...</NavLink>
            </Card.Footer>
        </Card>
    )
}


export default PlacesItemContent
