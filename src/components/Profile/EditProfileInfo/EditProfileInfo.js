import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from 'yup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditPassword from "../../EditPassword/EditPassword";


const EditProfileInfo = (props) => {

    let {first_name, last_name, email} = props

    let [show, handleShow] = useState(false)


    let initialValues = {
        first_name: first_name,
        last_name: last_name,
        email: email,

    }


    const onSubmit = values => {
        console.log('submit', values)
        props.editUser(values)
    }

    const validationSchema = yup.object({
        first_name: yup.string().required('Введите ваше имя!'),
        last_name: yup.string().required('Введите вашу фамилию!!'),
        email: yup.string().email('Email is not valid').required('Email is required'),
    })


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {formik => {
                return (
                    <Form className='m-3'>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Имя</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='first_name'
                                    value={formik.values.first_name}
                                    isValid={formik.touched.first_name && !formik.errors.first_name}
                                />
                            </Col>

                            {formik.touched.first_name && formik.errors.first_name ?
                                <Form.Text>{formik.errors.first_name} </Form.Text> : null}
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Фамилия</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter last name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='last_name'
                                    value={formik.values.last_name}
                                    isValid={formik.touched.last_name && !formik.errors.last_name}
                                />
                            </Col>
                            {formik.touched.last_name && formik.errors.last_name ?
                                <Form.Text>{formik.errors.last_name} </Form.Text> : null}
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm="2">Электронная почта</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='email'
                                    value={formik.values.email}
                                    isValid={formik.touched.email && !formik.errors.email}
                                />
                            </Col>
                            {formik.touched.email && formik.errors.email ?
                                <Form.Text>{formik.errors.email} </Form.Text> : null}
                        </Form.Group>

                        <Button
                            variant="outline-info"
                            className='my-2'
                            onClick={() => handleShow(!show)}
                        >Изменить пароль</Button>
                        <br/>
                        {show && <EditPassword {...props}/>}

                        <br/>
                        <Button
                            variant="primary"
                            onClick={formik.handleSubmit}
                            disabled={!formik.validateForm}
                        >Сохранить изменения
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )

}


export default EditProfileInfo
