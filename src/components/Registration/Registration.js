import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/cjs/Alert";
import {Formik} from "formik";
import * as yup from 'yup'
import CustomAlert from "../Alerts/CustomAlert";
class Registration extends React.Component {

    state = {
        showSuccess: false
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
        if (this.props.responseCode === 201) {
            prevProps.responseMessage !== this.props.responseMessage && this.setState({showSuccess: true})

        }
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
                                        isValid={formik.touched.first_name && !formik.errors.first_name}
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
                                        isValid={formik.touched.last_name && !formik.errors.last_name}
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
                                        isValid={formik.touched.email && !formik.errors.email}
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
                                        isValid={formik.touched.username && !formik.errors.username}
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
                                        isValid={formik.touched.password && !formik.errors.password}/>

                                    {formik.touched.password && formik.errors.password ?
                                        <Form.Text>{formik.errors.password} </Form.Text> : null}
                                </Form.Group>

                                {(this.state.showSuccess) &&
                                <Alert variant="success" onClose={() => this.setState({showSuccess: false})}
                                       dismissible>
                                    <Alert.Heading>Отлично!</Alert.Heading>
                                    <p>{this.props.responseMessage}</p>
                                    <p><a className='text-primary' onClick={() => this.props.handleActiveTab('login')}>Ввойдите
                                        в систему</a></p>
                                </Alert>
                                }

                                {(this.props.alert_text) &&
                                <CustomAlert
                                    statusMessage={this.props.alert_text}
                                    header={this.props.alert_header}
                                    variant={this.props.alert_variant}
                                />
                                }

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
