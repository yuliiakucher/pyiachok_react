import React, {useEffect} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from 'yup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditPassword from "./EditPassword/EditPassword";
import CustomAlert from "../../Alerts/CustomAlert";
import * as axios from 'axios'
import Container from "react-bootstrap/Container";
import {Accordion} from "react-bootstrap";


const EditProfileInfo = (props) => {

    console.log(props)

    let {first_name, last_name, email} = props


    useEffect(props.getTagsInfo, [])

    let initialValues = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        file: ''
    }


    const onSubmit = values => {
        console.log('submit', values)
        if (values.email === email) {
            delete values.email
        }
        props.editUser(values)
    }

    const validationSchema = yup.object({
        first_name: yup.string(),
        last_name: yup.string(),
        email: yup.string().email('Email is not valid'),
    })

    const handleImageSelect = (event) => {
        let formData = new FormData();
        const token = localStorage.token;
        formData.append("photo", event.currentTarget.files[0]);
        axios.patch('http://localhost:8000/profile/edit/', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    return (
        <Container>
            <form>
                <input id="photo" name="file" type="file" onChange={handleImageSelect}/>
            </form>
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
                                        placeholder="Enter first name"
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

                            <Accordion>
                                <Accordion.Toggle as={Button} eventKey='0'>
                                    Изменить пароль
                                </Accordion.Toggle>
                                <br/>
                                <Accordion.Collapse eventKey='0'>
                                    <EditPassword {...props}/>
                                </Accordion.Collapse>
                            </Accordion>


                            <br/>
                            {(props.alert_text) &&
                            <CustomAlert
                                statusMessage={props.alert_text}
                                header={props.alert_header}
                                variant={props.alert_variant}
                            />}

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
        </Container>

    )

}


export default EditProfileInfo
