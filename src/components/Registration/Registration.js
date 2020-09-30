import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/cjs/Alert";
import {Formik} from "formik";
import * as yup from 'yup'


class Registration extends React.Component {

    state = {
        show: false
    }

    initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        sex: '',
        username: '',
        password: ''
    }


    onSubmit = values => {
        this.props.userRegistration(values)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (this.props.responseCode === 400){
            prevProps.responseMessage!== this.props.responseMessage && this.setState({show: true})
        }
        else this.props.handleClose(false)
    }


    validationSchema = yup.object({
        first_name: yup.string(),
        last_name: yup.string(),
        email: yup.string().email('Email is not valid').required('Введите вашу эл. почту'),
        username: yup.string().required('Введите ваш юзернейм'),
        password: yup.string()
            .matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, 'Пароль должен быть от 6 символов, содержать заглавные буквы и цифры')
            .required('Введите ваш пароль')
    })


    render() {
        return (
            <>
                {(this.state.show) &&
                <Alert variant="danger" onClose={() => this.setState({show: false})} dismissible>
                    <Alert.Heading>Что-то пошло не так...</Alert.Heading>
                    <p>{this.props.responseMessage}</p>
                </Alert>
                }

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
            </>
        )
    }

}


export default Registration
