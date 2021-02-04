import React from 'react';
import {userAuth} from "../api/api";
import * as yup from "yup";
import {ErrorMessage, Formik} from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import {Col, Container} from "react-bootstrap";

const ResetPassword = () => {

    const initialValues = {
        email: '',
    }

    const onSubmit = values => {
        userAuth.passwordReset(values)
    }


    const validationSchema = yup.object({
        email: yup.string().email('Email is not valid').required('Email is required')
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {formik => {
                return (
                    <Form>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name='email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type='email'
                                isValid={formik.touched.email && !formik.errors.email}/>
                            <ErrorMessage name='email' component={Form.Text}/>
                        </Form.Group>
                        <Button block variant="outline-info" onClick={formik.handleSubmit}>Send code</Button>
                    </Form>)
            }}
        </Formik>
    )
}

export default ResetPassword;
