import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from "yup";
import './bootstrap-multiselect.css'
import {connect} from "react-redux";
import {getResponseInfo} from "../../../redux/place-reducer";
import Alert from "react-bootstrap/cjs/Alert";


const CreatePlace = (props) => {

    const [show, handleShow] = useState(false)

    const initialValues = {
        name: '',
        address: '',
        email: '',
        contacts: '',
        type: '',
        tags: [],
        specificities: []
    }

    useEffect(() => {
        if (props.statusCode === 201){
            handleShow(true)
        }
    }, [props.statusCode])



    const onSubmit = values => {
        values.tags =[...(values.tags.map(value =>({'tag_name': value})))]
        values.specificities = [...(values.specificities.map(value => ({'specificity_name': value})))]
        values.type = ({'type_name': values.type})
        props.getResponseInfo(values)
    }


    const validationSchema = yup.object({
        name: yup.string().required('Введите название'),
        address: yup.string().required('Введите адрес'),
        email: yup.string().email('Email is not valid')
        .required('Введите вашу эл. почту')
        ,
        contacts: yup.string().matches(/^(\+\d{1,12})$/, 'Номер телефона должен содержать только цифры')
        .required('Введите ваши контакты')
        ,
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({
                  handleChange,
                  handleBlur,
                  touched,
                  errors,
                  handleSubmit,
                  validateForm

              }) => {
                return (

                    <Form className='w-50 m-5'>
                        <Form.Group>
                            <Form.Label>Название</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='name'
                                isValid={touched.name && !errors.name}
                            />
                            {touched.name && errors.name ?
                                <Form.Text>{errors.name} </Form.Text> : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Адрес</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='address'
                                isValid={touched.address && !errors.address}
                            />
                            {touched.address && errors.address ?
                                <Form.Text>{errors.address} </Form.Text> : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Электронная почта</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='email'
                                isValid={touched.email && !errors.email}
                            />
                            {touched.email && errors.email ?
                                <Form.Text>{errors.email} </Form.Text> : null}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Контакты</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="+38"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name='contacts'
                                isValid={touched.contacts && !errors.contacts}
                            />
                            {touched.contacts && errors.contacts ?
                                <Form.Text>{errors.contacts} </Form.Text> : null}
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Выберите тип заведения</Form.Label>
                            <Form.Control as="select" onChange={handleChange} name='type'>
                                <option value='bar'>Бар</option>
                                <option value='restaurant'>Ресторан</option>
                            </Form.Control>
                        </Form.Group>

                        {/*<Form>*/}
                        {/*    <Form.Control as="select" multiple value={options} onChange={handleChange}>*/}
                        {/*        {options.map(options => (*/}
                        {/*            <option key={option.name} value={option.value}>*/}
                        {/*                {option.name}*/}
                        {/*            </option>*/}
                        {/*        ))}*/}
                        {/*    </Form.Control>*/}
                        {/*</Form>*/}

                        <Form.Group>
                            <Form.Label>Выберите дополнительные услуги заведения</Form.Label>
                            <Form.Control as="select" multiple onChange={handleChange} name='tags'>
                                <option value='parking'>Парковка</option>
                                <option value='wifi'>Wifi</option>
                                <option value='children_menu'>Детское меню</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Выберите спецификацию заведения</Form.Label>
                            <Form.Control as="select" multiple onChange={handleChange} name='specificities'>
                                <option value='BDs'>Дни рождения</option>
                                <option value='corporate_parties'>Корпоративы</option>
                            </Form.Control>
                        </Form.Group>

                        {show &&
                        <Alert variant="success">
                            <Alert.Heading>Отлично!</Alert.Heading>
                            <p>{props.statusMessage}</p>
                        </Alert>}


                        <Button
                            variant="primary"
                            onClick={handleSubmit}
                            disabled={!validateForm}
                        >Submit
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}

let mapStateToProps = (state) => {
    return {
        statusCode: state.PlacePage.statusCode,
        statusMessage: state.PlacePage.statusMessage,
    }
}

export default connect(mapStateToProps, {getResponseInfo})(CreatePlace)
