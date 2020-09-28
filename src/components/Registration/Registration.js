import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import {Formik} from "formik";
import * as yup from 'yup'


class Registration extends React.Component {

    initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        sex: '',
        username: '',
        password: ''
    }


    onSubmit = values => {
        this.props.handleClose(false)
        this.props.userRegistration(values)
    }

    validationSchema = yup.object({
        first_name: yup.string().required('Введите ваше имя!'),
        last_name: yup.string().required('Введите вашу фамилию!!'),
        email: yup.string().email('Email is not valid').required('Email is required'),
        username: yup.string().required('Username is required'),
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Password is not valid')
            .required('Password is required')
    })


    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                validationSchema={this.validationSchema}
            >
                {formik => {
                    return (
                        <Form>
                            <Form.Group>
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='first_name'
                                />
                                {formik.touched.first_name && formik.errors.first_name ?
                                    <Form.Text>{formik.errors.first_name} </Form.Text> : null}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter last name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='last_name'
                                />
                                {formik.touched.last_name && formik.errors.last_name ?
                                    <Form.Text>{formik.errors.last_name} </Form.Text> : null}
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='email'
                                />
                                {formik.touched.email && formik.errors.email ?
                                    <Form.Text>{formik.errors.email} </Form.Text> : null}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='username'
                                />
                                {formik.touched.username && formik.errors.username ?
                                    <Form.Text>{formik.errors.username} </Form.Text> : null}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Choose your gender</Form.Label>
                                <Form.Control as="select" onChange={formik.handleChange} name='sex'>
                                    <option value='male'>м</option>
                                    <option value='female'>ж</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="regFormBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name='password'
                                />
                                {formik.touched.password && formik.errors.password ?
                                    <Form.Text>{formik.errors.password} </Form.Text> : null}
                            </Form.Group>

                            <Button
                                variant="primary"
                                onClick={formik.handleSubmit}
                                disabled={!formik.validateForm}
                            >Submit
                            </Button>
                        </Form>
                    )
                }}

            </Formik>


        )
    }

}


export default Registration
