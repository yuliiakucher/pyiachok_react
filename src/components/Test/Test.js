import React from "react";
import {Formik} from "formik";
import Form from 'react-bootstrap/Form'
import * as yup from "yup";
import * as axios from 'axios'
import Button from "react-bootstrap/cjs/Button";
import {withRouter} from "react-router-dom";

const queryString = require('query-string');


const AlertDismissibleExample = (props) => {
    const initialValues = {
        password: ''
    }

    const onSubmit = values => {
        console.log(values)
        const parsed = queryString.parse(props.location.search);
        console.log(parsed)
        const data = {'token': parsed.token, 'password': values.password}
        console.log(data)
        axios.post('http://localhost:8000/api/password_reset/confirm/', {data})
            .then(response => console.log(response))
    }

    const validationSchema = yup.object({
        password: yup.string().required()
    })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(
                {
                    handleChange,
                    handleBlur,
                    handleSubmit, validateForm,
                    touched, errors
                }) => {
                return (

                    <Form>
                        <Form.Group>
                            <Form.Label>password</Form.Label>
                            <Form.Control
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isValid={touched.password && !errors.password}
                            />
                            {touched.password && !errors.password ?
                                <Form.Text>{errors.password}</Form.Text> : null}
                        </Form.Group>
                        <Button onClick={handleSubmit} disabled={!validateForm}>Submit</Button>
                    </Form>
                )
            }}
        </Formik>
    );
}


export default withRouter(AlertDismissibleExample)
