import React, {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from 'yup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditPassword from "./EditPassword/EditPassword";
import CustomAlert from "../../Alerts/CustomAlert";
import Container from "react-bootstrap/Container";
import {Accordion} from "react-bootstrap";
import CustomFileInput from "../../utilits/CustomFileInput";


const EditProfileInfo = (props) => {


    let {first_name, last_name, email} = props
    let {alert_text, alert_variant, alert_header} = props
    const [photo, setPhoto] = useState('')

    console.log(props)
    useEffect(props.getTagsInfo, [])

    let initialValues = {
        first_name: first_name,
        last_name: last_name,
        email: email,
    }


    const onSubmit = values => {
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

    const handleImageSelect = () => {
        let formData = new FormData();
        formData.append("photo", photo);
        props.editPhoto(formData)
    }

    return (
        <Container>
            <form>
                <CustomFileInput
                    file={photo}
                    name='Profile photo'
                    file_label='Please, attach your photo'
                    setData={setPhoto}
                />
                <Button variant='outline-primary' onClick={handleImageSelect}>Change Image</Button>
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

                            <br/>
                            {(props.alert_text) &&
                            <CustomAlert
                                statusMessage={alert_text}
                                header={alert_header}
                                variant={alert_variant}
                            />}

                            <Button
                                variant="primary"
                                onClick={formik.handleSubmit}
                                disabled={!formik.validateForm}
                            >Save changes
                            </Button>
                        </Form>
                    )
                }}
            </Formik>

            <Accordion>
                <Accordion.Toggle as={Button} eventKey='0'>
                    Change password
                </Accordion.Toggle>
                <br/>
                <Accordion.Collapse eventKey='0'>
                    <EditPassword {...props}/>
                </Accordion.Collapse>
            </Accordion>
        </Container>

    )

}


export default EditProfileInfo
