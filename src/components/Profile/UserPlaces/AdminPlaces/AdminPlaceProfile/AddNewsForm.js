import React, {useEffect, useState} from 'react';
import {Container, Row, Form, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createNews, getNewsTypes} from "../../../../../redux/news-reducer";
import CustomFileInput from "../../../../utilits/CustomFileInput";
import CustomAlert from "../../../../Alerts/CustomAlert";
import useForm from "../../../../utilits/useForm";
import {validate} from '../../../../utilits/validation'


const AddNewsForm = () => {

    const place = useSelector(store => store.PlacePage.place)
    const types = useSelector(store => store.NewsPage.news_types)
    const header = useSelector(store => store.AlertPage.header)
    const message = useSelector(store => store.AlertPage.text)
    const variant = useSelector(store => store.AlertPage.variant)

    const dispatch = useDispatch()

    const {handleChange, handleSubmit, values, errors} = useForm(onSubmit, validate)
    const [photo_value, setPhoto] = useState('')


    useEffect(() => {
        dispatch(getNewsTypes())
    }, [dispatch])

    function onSubmit(){
        const {name,text, type} = values
        const formDate = new FormData()
        formDate.append('name', name)
        formDate.append('photo', photo_value)
        formDate.append('text', text)
        formDate.append('type', type)
        dispatch(createNews(place.id, formDate))
    }


    return (
        <Container>
            <Row>
                <ol className='breadcrumb'>
                    <li className={'breadcrumb-item'}>
                        <NavLink to={'/places'}>
                            Owned Places
                        </NavLink>
                    </li>
                    <li className={'breadcrumb-item active'}>
                        <NavLink to={`profile/places/${place.id}`}>
                            {place.name}
                        </NavLink>
                    </li>
                    <li className={'breadcrumb-item active'}>add-news</li>

                </ol>
            </Row>

            <Row>
                <Form>
                    <Form.Group >
                        <Form.Label>Type</Form.Label>

                        <Form.Control as='select' onChange={handleChange} name='type'>
                            {
                                types.map(type => (
                                    <option value={type.id} key={type.id}>{type.type}</option>
                                ))
                            }

                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            placeholder='Please, write the name'
                            name='name'
                            value={values.name}
                            onChange={handleChange}
                        />
                        {!!errors.name && <Form.Text>{errors.name}</Form.Text>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Main text</Form.Label>
                        <Form.Control
                            placeholder='Please, write the text'
                            name='text'
                            value={values.text}
                            onChange={handleChange}/>
                        {!!errors.text && <Form.Text>{errors.text}</Form.Text>}
                    </Form.Group>
                    <CustomFileInput
                        label='Text'
                        name='photo'
                        setData= {setPhoto}
                        file={photo_value}
                        file_label='Please, attach your image'
                        />
                    {variant&& <CustomAlert variant={variant} statusMessage={message} header={header}/>}
                    <Button onClick={()=>handleSubmit()}>Create News</Button>
                </Form>
            </Row>
        </Container>
    );
};

export default AddNewsForm;
